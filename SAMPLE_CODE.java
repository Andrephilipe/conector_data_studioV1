/**
 * Copyright (c) 2015-present, Facebook, Inc. All rights reserved.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to
 * use, copy, modify, and distribute this software in source code or binary
 * form for use in connection with the web services and APIs provided by
 * Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use
 * of this software is subject to the Facebook Developer Principles and
 * Policies [http://developers.facebook.com/policy/]. This copyright notice
 * shall be included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

import com.facebook.ads.sdk.*;
import java.io.File;
import java.util.Arrays;

public class SampleCode {
  public static void main (String args[]) throws APIException {

    String access_token = "EAAsNQRLBWDwBAMwPZC47wttKl20ZAk4fjfZCpfpsnjgndklMPvhWtifjzo99oBFFmi9v4OEwgCak8OH8SkrWkZCZCwrr7dTGXQz8T63d245o2BGQwSggVXzZB87Uv2nIUJi2z6ZBPvyCHl9AaFLm00gOZBlZAcYA5nYGUEVNsyWVTTiIZCIbZBY1kKmd9v6I9cugiUZD";
    String ad_account_id = "1213712186069046";
    String app_secret = "04cde27c56b0f37e3eaf39fd1a1d5963";
    String app_id = "3110797882513468";
    APIContext context = new APIContext(access_token).enableDebug(true);

    new AdAccount(ad_account_id, context).getInsights()
      .setTimeRange("{\"since\":\"2022-05-07\",\"until\":\"2022-06-06\"}")
      .setFiltering("[]")
      .setLevel(AdsInsights.EnumLevel.VALUE_CAMPAIGN)
      .setBreakdowns(Arrays.asList())
      .requestField("results")
      .requestField("result_rate")
      .requestField("reach")
      .requestField("frequency")
      .requestField("impressions")
      .requestField("delivery")
      .requestField("spend")
      .requestField("impressions_gross")
      .requestField("impressions_auto_refresh")
      .requestField("attribution_setting")
      .requestField("quality_score_organic")
      .requestField("quality_score_ectr")
      .requestField("quality_score_ecvr")
      .requestField("cost_per_result")
      .requestField("cpp")
      .requestField("cpm")
      .execute();
  }
}
