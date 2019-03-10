import Country from '../Country';
import Language from '../Language';
import GameInfoModel from '../middle-contracts/GameInfoModel';
export default function guestLoginAsync(host: string, userAgent: string, gameIndex: number, appVersion: string, userId: number, deviceId: number, country: Country, language: Language, macAddress: string, deviceName: string, osVersion: string, advertisingId: string, createIfNotExist: boolean): Promise<GameInfoModel>;
