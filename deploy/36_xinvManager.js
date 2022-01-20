module.exports = async ({
    deployments,
    getNamedAccounts
  }) => {
    console.log("36. Deploy xINV Manager")
    const {deploy, get} = deployments;
    const {deployer, gov} = await getNamedAccounts();
    const XINV = await get('XINV');

    await deploy('XinvManager', {
      from: deployer,
      args:[
        XINV.address,
        gov,
        policyCommittee
      ]
    });
  };

module.exports.tags = ['XinvManager'];
