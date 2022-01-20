module.exports = async ({
    deployments,
    getNamedAccounts
  }) => {
    console.log("37. Deploy xINV vester factory")
    const {deploy, get} = deployments;
    const {deployer, inv, gov} = await getNamedAccounts();
    const XINV = await get('XINV');

    await deploy('XinvVesterFactory', {
      from: deployer,
      args:[
        XINV.address,
        inv,
        gov
      ]
    });
  };

module.exports.tags = ['XinvVesterFactory'];
