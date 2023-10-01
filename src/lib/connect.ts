import { NFTStorage } from 'nft.storage';

export declare namespace Uploader3Connector {
  interface PostImageFile {
    data: string;
    type: 'image/png' | 'image/jpeg' | 'image/gif' | 'image/jpg';
  }

  type Connector = {
    postImage: (image: PostImageFile) => Promise<{ cid: string; url: string }>;
  };
}

export const createNFTStorageConnector = (options: { token: string }): Uploader3Connector.Connector => {
  const { token } = options;
  const client = new NFTStorage({ token });
  return {
    postImage: async (image: any) => {
      const cid = await client.storeBlob(image);
      await client.check(cid);

      return { cid, url: `https://nftstorage.link/ipfs/${cid}` };
    },
  };
};
