/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

const bizSdk = require('facebook-nodejs-business-sdk');
const AdAccount = bizSdk.AdAccount;
const AdsInsights = bizSdk.AdsInsights;

let access_token = 'EAAsNQRLBWDwBAMwPZC47wttKl20ZAk4fjfZCpfpsnjgndklMPvhWtifjzo99oBFFmi9v4OEwgCak8OH8SkrWkZCZCwrr7dTGXQz8T63d245o2BGQwSggVXzZB87Uv2nIUJi2z6ZBPvyCHl9AaFLm00gOZBlZAcYA5nYGUEVNsyWVTTiIZCIbZBY1kKmd9v6I9cugiUZD';
let ad_account_id = 'act_1213712186069046';
let app_secret = '04cde27c56b0f37e3eaf39fd1a1d5963';
let app_id = '3110797882513468';
const api = bizSdk.FacebookAdsApi.init(access_token);
const account = new AdAccount(ad_account_id);
const showDebugingInfo = true; // Setting this to true shows more debugging info.
if (showDebugingInfo) {
  api.setDebug(true);
}

let ads_insights;
let ads_insights_id;

const logApiCallResult = (apiCallName, data) => {
  console.log(apiCallName);
  if (showDebugingInfo) {
    console.log('Data:' + JSON.stringify(data));
  }
};

const fields = [
  'results',
  'result_rate',
  'reach',
  'frequency',
  'impressions',
  'delivery',
  'spend',
  'impressions_gross',
  'impressions_auto_refresh',
  'attribution_setting',
  'quality_score_organic',
  'quality_score_ectr',
  'quality_score_ecvr',
  'cost_per_result',
  'cpp',
  'cpm',
];
const params = {
  'time_range' : {'since':'2022-05-07','until':'2022-06-06'},
  'filtering' : [],
  'level' : 'campaign',
  'breakdowns' : [],
};
 (new AdAccount(ad_account_id)).getInsights(
  fields,
  params
)
.then((result) => {
  logApiCallResult('ads_insights api call complete.', result);
  ads_insights_id = result[0].id;
})
.catch((error) => {
  console.log(error);
});
