import { useActiveWeb3React } from "./utilities/index.js";
import { ethers } from "ethers";
import { chainIdMap } from "./utilities/constants";

export default () => {
    let mockMtcEth
    let bridgeEth
    let mockMtcBsc
    let bridgeBsc
    const { account, library, chainId } = useActiveWeb3React();
    const activeUser = library.getSigner(account);
    const networkName = chainIdMap[chainId];
    const bscProvider = new ethers.providers.JsonRpcProvider("https://data-seed-prebsc-1-s1.binance.org:8545")

    if (chainId == 3) {
        const mockMtcEthJson = require("./deployments/" + networkName + "/MockMtcEth.json")
        const bridgeEthJson = require("./deployments/" + networkName + "/BridgeEth.json")
        mockMtcEth = new ethers.Contract(mockMtcEthJson.address, mockMtcEthJson.abi, activeUser)
        bridgeEth = new ethers.Contract(bridgeEthJson.address, bridgeEthJson.abi, activeUser)
        console.log(networkName)
        const mockMtcBscJson = require("./deployments/bsctestnet/MockMtcBsc.json")
        mockMtcBsc = new ethers.Contract(mockMtcBscJson.address, mockMtcBscJson.abi, bscProvider)
        const bridgeBscJson = require("./deployments/bsctestnet/BridgeBsc.json")
        bridgeBsc = new ethers.Contract(bridgeBscJson.address, bridgeBscJson.abi, bscProvider)
    }

    return { mockMtcEth, mockMtcBsc, bridgeEth, bridgeBsc, activeUser };
};