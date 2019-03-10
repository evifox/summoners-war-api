import { keyBy } from 'lodash';
import VersionInfoModel from '../middle-contracts/VersionInfoModel';
import GetVersionInfoRequest from '../request-contracts/GetVersionInfoRequest';
import GetVersionInfoResponse, {
  VersionDataModel,
  VersionDataTopic
} from '../response-contracts/GetVersionInfoResponse';
import invokeAsync from './invokeAsync';

export default async function getVersionInfoAsync(
  host: string,
  userAgent: string,
  gameIndex: number
): Promise<VersionInfoModel> {
  const response = await invokeAsync<GetVersionInfoRequest, GetVersionInfoResponse>(
    host,
    userAgent,
    {
      game_index: gameIndex
    }
  );
  const versionDataByTopic = keyBy(response.version_data, (data: VersionDataModel) => data.topic);
  return {
    infocsv: versionDataByTopic[VersionDataTopic.infocsv].version,
    protocol: Number.parseInt(versionDataByTopic[VersionDataTopic.protocol].version)
  };
}
