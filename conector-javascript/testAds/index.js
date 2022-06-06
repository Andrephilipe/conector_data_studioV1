const bizSdk = require('facebook-nodejs-business-sdk');

const accessToken = 'EAAsNQRLBWDwBAJP0WwBlMKlyZAJWCx90UlKe3sqpYqaT8RwD6RvxGwhsXaQpeICvrMTNrIKvxZBzEyhY9eTF87bwF4L8JAcCjEPN5ZAR7vBkMrhoVhfsE5tbqNb8lWuc4ZBB1vbDITWG6i3ian3IVCJknhqBQOZBQduqWotZCIaVJEavZAsy4CYkTqmZAhb0mZBIZD';
const accountId = 'act_act_1213712186069046';

const FacebookAdsApi = bizSdk.FacebookAdsApi.init(accessToken);
const AdAccount = bizSdk.AdAccount;
const Campaign = bizSdk.Campaign;

const account = new AdAccount(accountId);
var campaigns;
    
account.read([AdAccount.Fields.name])
  .then((account) =>{
    return account.getCampaigns([Campaign.Fields.name], { limit: 10 }) // fields array and params
  })
  .then((result) =>{
    campaigns = result
    campaigns.forEach((campaign) =>console.log(campaign.name))  
  }).catch(console.error);
