// 导入来自'nft.storage'包的NFTStorage类和File构造函数
import { NFTStorage, File } from 'nft.storage'

// 'mime' npm包帮助我们设置File对象的正确文件类型
import mime from 'mime'

// Node.js内置的'fs'模块提供对文件系统的访问
import fs from 'fs'

// 'path'模块提供有关操作文件系统路径的帮助程序
import path from 'path'

// 将您的NFT.Storage API密钥粘贴到引号中：
const NFT_STORAGE_KEY = 'REPLACE_ME_WITH_YOUR_KEY'

/**
  * 从`imagePath`读取图像文件并使用给定的名称和描述存储NFT。
  * @param {string} imagePath 图像文件的路径
  * @param {string} name NFT的名称
  * @param {string} description NFT的文本描述
  */
async function storeNFT(imagePath, name, description) {
    // 从磁盘加载文件
    const image = await fileFromPath(imagePath)

    // 使用我们的API密钥创建一个新的NFTStorage客户端
    const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY })

    // 调用client.store，传递图像和元数据
    return nftstorage.store({
        image,
        name,
        description,
    })
}

/**
  * 从磁盘上的位置读取文件并返回一个File对象的帮助程序。
  * 请注意，这会将整个文件读入内存中，不应用于非常大的文件。
  * @param {string} filePath 要存储的文件的路径
  * @returns {File} 包含文件内容的File对象
  */
async function fileFromPath(filePath) {
    const content = await fs.promises.readFile(filePath)
    const type = mime.getType(filePath)
    return new File([content], path.basename(filePath), { type })
}

/**
 * 脚本的主要入口点，检查命令行参数并调用storeNFT。
 * 为了简化示例，我们没有进行任何复杂的命令行解析。只有三个位置参数，分别是imagePath、name和description。
 */
async function main() {
    const args = process.argv.slice(2)
    if (args.length !== 3) {
        console.error(`使用方式：${process.argv[0]} ${process.argv[1]} <image-path> <name> <description>`)
        process.exit(1)
    }

    const [imagePath, name, description] = args
    const result = await storeNFT(imagePath, name, description)
    console.log(result)
}

// 不要忘记实际调用main函数！
// 我们无法在顶层使用`await`，因此这添加了一个.catch()以捕获任何错误并将其打印到控制台。
main()
  .catch(err => {
      console.error(err)
      process.exit(1)
  })
