declare module "Attribute" {
    enum Attribute {
        Water = 1,
        Fire = 2,
        Wind = 3,
        Light = 4,
        Dark = 5
    }
    export default Attribute;
}
declare module "Command" {
    enum Command {
        guestLogin = "GuestLogin",
        battleScenarioStart = "BattleScenarioStart",
        battleScenarioResult = "BattleScenarioResult",
        updateAchievement = "UpdateAchievement"
    }
    export default Command;
}
declare module "Country" {
    enum Country {
        ru = "RU"
    }
    export default Country;
}
declare module "CraftMaterial" {
    enum CraftMaterial {
        HardWood = 1001,
        ToughLeather = 1002,
        SolidRock = 1003,
        SolidIronOre = 1004,
        ShiningMithril = 1005,
        ThickCloth = 1006,
        RunePiece = 2001,
        MagicDust = 3001,
        SymbolOfHarmony = 4001,
        SymbolOfTranscendence = 4002,
        SymbolOfChaos = 4003,
        FrozenWaterCrystal = 5001,
        FlamingFireCrystal = 5002,
        WhirlingWingCrystal = 5003,
        ShinyLightCrystal = 5004,
        PitchBlackDarkCrystal = 5005,
        CondensedMagicCrystal = 6001,
        PureMagicCrystal = 7001
    }
    export default CraftMaterial;
}
declare module "Difficulty" {
    enum Difficulty {
        Normal = 1,
        Hard = 2,
        Hell = 3
    }
    export default Difficulty;
}
declare module "Dungeon" {
    enum Dungeon {
        HallOfDark = 1001,
        HallOfFire = 2001,
        HallOfWater = 3001,
        HallOfWind = 4001,
        HallOfMagic = 5001,
        Necropolis = 6001,
        HallOfLight = 7001,
        GiantsKeep = 8001,
        DragonsLair = 9001
    }
    export default Dungeon;
}
declare module "EssenceAttribute" {
    enum EssenceAttribute {
        Water = 1,
        Fire = 2,
        Wind = 3,
        Light = 4,
        Dark = 5,
        Magic = 6
    }
    export default EssenceAttribute;
}
declare module "EssenceGrade" {
    enum EssenceGrade {
        Low = 1,
        Mid = 2,
        High = 3
    }
    export default EssenceGrade;
}
declare module "Language" {
    enum Language {
        ru = "ru"
    }
    export default Language;
}
declare module "Monster" {
    enum Monster {
        Fairy = 101,
        Imp = 102,
        Pixie = 103,
        Yeti = 104,
        Harpy = 105,
        Hellhound = 106,
        Warbear = 107,
        Elemental = 108,
        Garuda = 109,
        Inugami = 110,
        Salamander = 111,
        NineTiledFox = 112,
        Serpent = 113,
        Golem = 114,
        Griffon = 115,
        Undine = 116,
        Inferno = 117,
        Sylph = 118,
        Sylphid = 119,
        HightElemental = 120,
        Harpu = 121,
        Slime = 122,
        ForestKeeper = 123,
        Mushroom = 124,
        ManedBoar = 125,
        MonsterFlower = 126,
        Ghost = 127,
        LowElemental = 128,
        Mimick = 129,
        HornedFrog = 130,
        Sandman = 131,
        Howl = 132,
        Succubus = 133,
        Joker = 134,
        Ninja = 135,
        SurpriseBox = 136,
        Bearman = 137,
        Valkyria = 138,
        Pierret = 139,
        Werewolf = 140,
        PhantomThief = 141,
        Angelmon = 142,
        Dragon = 144,
        Phoenix = 145,
        Chimera = 146,
        Vampire = 147,
        Viking = 148,
        Amazon = 149,
        MartialCat = 150,
        Vagabond = 152,
        EpikionPriest = 153,
        MagicalArcher = 154,
        Rakshasa = 155,
        BountyHunter = 156,
        Oracle = 157,
        ImpChampion = 158,
        MysticWitch = 159,
        GrimReaper = 160,
        OccultGirl = 161,
        DeathKnight = 162,
        Lich = 163,
        SkullSolider = 164,
        LivingArmor = 165,
        DragonKnight = 166,
        MagicalArcherPromo = 167,
        MonkeyKing = 168,
        Samurai = 169,
        Archangel = 170,
        DrunkenMaster = 172,
        KungFuGirl = 173,
        BeastMonk = 174,
        MischievousBat = 175,
        BattleScorpion = 176,
        Minotauros = 177,
        Lizardman = 178,
        HellLady = 179,
        BrownieMagician = 180,
        KoboldBomber = 181,
        KingAngelmon = 182,
        SkyDancer = 183,
        Taosist = 184,
        BeastHunter = 185,
        Pioneer = 186,
        PenguinKnight = 187,
        BarbaricKing = 188,
        PolarQueen = 189,
        BattleMammoth = 190,
        FairyQueen = 191,
        Ifrit = 192,
        CowGirl = 193,
        PirateCaptain = 194,
        ChargerShark = 195,
        Mermaid = 196,
        SeaEmperor = 197,
        MagicKnight = 198,
        Assassin = 199,
        NeostoneFighter = 200,
        MartialArtist = 202,
        Mummy = 203,
        Anubis = 204,
        DesertQueen = 205,
        Horus = 206,
        JackOLantern = 207,
        Frankenstein = 208,
        ElvenRanger = 209,
        Harg = 210,
        FairyKing = 211,
        PandaWarrior = 212,
        DiceMagician = 213,
        HarpMagician = 214,
        Unicorn = 215,
        Paladin = 218,
        ChakramDancer = 219,
        BoomerangWarrior = 220,
        Dryad = 221,
        Druid = 222,
        GiantWarrior = 224,
        LightningEmperor = 226,
        SniperMkI1 = 227,
        SniperMkI2 = 228,
        CannonGirl = 229,
        Devilmon = 151,
        Rainbowmon = 143,
        HomunculusAttack = 10001,
        HomunculusSupport = 10002
    }
    export default Monster;
}
declare type Nullable<T> = T | null;
declare module "NumBool" {
    type NumBool = 0 | 1;
    export default NumBool;
}
declare module "ReturnCode" {
    enum ReturnCode {
        ok = 0,
        invalidRequestBody = 1002,
        invalidCommand = 1004
    }
    export default ReturnCode;
}
declare module "RuneClass" {
    enum RuneClass {
        Common = 1,
        Magic = 2,
        Rare = 3,
        Hero = 4,
        Legendary = 5
    }
    export default RuneClass;
}
declare module "RuneEffect" {
    enum RuneEffect {
        None = 0,
        HpAbsolute = 1,
        HpRelative = 2,
        AtkAbsolute = 3,
        AtkRelative = 4,
        DefAbsolute = 5,
        DefRelative = 6,
        Speed = 7,
        CritRate = 8,
        CritDamage = 9,
        Resistance = 10,
        Accuracy = 11
    }
    export default RuneEffect;
}
declare module "RuneQuality" {
    enum RuneQuality {
        Common = 1,
        Magic = 2,
        Rare = 3,
        Hero = 4,
        Legent = 5
    }
    export default RuneQuality;
}
declare module "RuneSet" {
    enum RuneSet {
        Energy = 1,
        Guard = 2,
        Swift = 3,
        Blade = 4,
        Rage = 5,
        Focus = 6,
        Endure = 7,
        Fatal = 8,
        Despair = 10,
        Vampire = 11,
        Violent = 13,
        Nemesis = 14,
        Will = 15,
        Shield = 16,
        Revenge = 17,
        Destroy = 18,
        Fight = 19,
        Determination = 20,
        Enhance = 21,
        Accuracy = 22,
        Tolerance = 23,
        Immemorial = 99
    }
    export default RuneSet;
}
declare module "Scenario" {
    enum Scenario {
        GarezForest = 1,
        MtSiz = 2,
        KabirRuins = 3,
        MtWhiteRagon = 4,
        TelainForest = 5,
        HydeniRuins = 6,
        TamorDesert = 7,
        VrofagusRuins = 8,
        FaimonVolcano = 9,
        AidenForest = 10,
        FerunCastle = 11,
        MtRunar = 12,
        ChirukaRemains = 13
    }
    export default Scenario;
}
declare module "Slot" {
    type Slot = 1 | 2 | 3 | 4 | 5 | 6;
    export default Slot;
}
declare module "Stage" {
    type Stage = 1 | 2 | 3 | 4 | 5 | 6 | 7;
    export default Stage;
}
declare module "UtcTime" {
    export default class UtcTime {
        static readonly now: number;
        static readonly nowInSeconds: number;
    }
}
declare module "calculateSmon" {
    export interface TsValContainer {
        ts_val: number;
    }
    export interface SmonCalcResult {
        smonChecker: string;
        smonTmVal: number;
        body: string;
    }
    export default function calculateSmon<TData extends TsValContainer>(data: TData): SmonCalcResult;
}
declare module "fetchAsync" {
    const fetchAsync: (url: string | import("node-fetch").Request, init?: import("../types/fetch-cookie").ExtendedRequestInit | undefined) => Promise<import("node-fetch").Response>;
    export default fetchAsync;
}
declare module "middle-contracts/ItemModel" {
    export default interface ItemModel {
        type: number;
        masterId: number;
        quantity: number;
    }
}
declare module "middle-contracts/ItemsIndex" {
    import ItemModel from "middle-contracts/ItemModel";
    export default interface ItemsIndex {
        [inventoryMasterId: number]: ItemModel;
    }
}
declare module "middle-contracts/NpcFriendModel" {
    export default interface NpcFriendModel {
        wizardId: number;
        npcFriendId: number;
        npcFriendLevel: number;
        unitMasterId: number;
        unitClass: number;
        unitLevel: number;
        unitId: number;
        nextAssistTime: number;
    }
}
declare module "middle-contracts/NpcFriendIndex" {
    import NpcFriendModel from "middle-contracts/NpcFriendModel";
    export default interface NpcFriendIndex {
        [friendId: number]: NpcFriendModel;
    }
}
declare module "middle-contracts/RuneModel" {
    import RuneClass from "RuneClass";
    import RuneQuality from "RuneQuality";
    import RuneSet from "RuneSet";
    import Slot from "Slot";
    export default interface RuneModel {
        runeId: number;
        slot: Slot;
        rank: RuneQuality;
        class: RuneClass;
        set: RuneSet;
        upgradeLimit: number;
        currentUpgrade: number;
    }
}
declare module "middle-contracts/RunesIndex" {
    import RuneModel from "middle-contracts/RuneModel";
    export default interface RunesIndex {
        [runeId: number]: RuneModel;
    }
}
declare module "middle-contracts/UnitModel" {
    import Attribute from "Attribute";
    import Monster from "Monster";
    export default interface UnitModel {
        unitId: number;
        class: number;
        level: number;
        type: Monster;
        awakened: boolean;
        attribute: Attribute;
    }
}
declare module "middle-contracts/UnitsIndex" {
    import UnitModel from "middle-contracts/UnitModel";
    export default interface UnitsIndex {
        [unitId: number]: UnitModel;
    }
}
declare module "middle-contracts/GameInfoModel" {
    import ItemsIndex from "middle-contracts/ItemsIndex";
    import NpcFriendIndex from "middle-contracts/NpcFriendIndex";
    import RunesIndex from "middle-contracts/RunesIndex";
    import UnitsIndex from "middle-contracts/UnitsIndex";
    export default interface GameInfoModel {
        host: string;
        userAgent: string;
        wizardId: number;
        protocol: number;
        infocsv: string;
        sessionKey: string;
        channelUid: number;
        name: string;
        mana: number;
        crystal: number;
        honorPoint: number;
        guildPoint: number;
        eventCoin: number;
        energy: number;
        energyMax: number;
        energyPerMin: number;
        nextEnergyGain: number;
        arenaEnergy: number;
        arenaEnergyMax: number;
        nextArenaEnergyGain: number;
        level: number;
        defenseUnitIds: number[];
        unitsIndex: UnitsIndex;
        itemsIndex: ItemsIndex;
        runesIndex: RunesIndex;
        wishRemained: number;
        nextWishUpdate: number;
        currentSummonSpecialUnitIds: number[];
        obstacleIds: number[];
        npcFriendIndex: NpcFriendIndex;
    }
}
declare module "request-contracts/GatewayRequestBase" {
    import Command from "Command";
    export default interface GatewayRequestBase {
        command: Command;
        wizard_id: Nullable<number>;
        proto_ver: number;
        infocsv: string;
        session_key: string;
        channel_uid: number;
    }
}
declare module "response-contracts/GatewayResponseBase" {
    import Command from "Command";
    import ReturnCode from "ReturnCode";
    export default interface GatewayResponseBase {
        command: Command;
        ret_code: ReturnCode;
        ts_val: number;
        tvalue: number;
        tvaluelocal: number;
        tzone: string;
    }
}
declare module "response-contracts/WizardInfoModel" {
    export default interface WizardInfoModel {
        wizard_id: number;
        wizard_name: string;
        wizard_mana: number;
        wizard_crystal: number;
        wizard_level: number;
        experience: number;
        wizard_energy: number;
        energy_max: number;
        energy_per_min: number;
        next_energy_gain: number;
        arena_energy: number;
        arena_energy_max: number;
        arena_energy_next_gain: number;
        social_point_current: number;
        social_point_max: number;
        honor_point: number;
        guild_point: number;
        darkportal_energy: number;
        darkportal_energy_max: number;
        costume_point: number;
        costume_point_max: number;
        honor_medal: number;
        honor_mark: number;
        event_coin: number;
    }
}
declare module "gateway-api/invokeAsync" {
    import GatewayRequestBase from "request-contracts/GatewayRequestBase";
    import GatewayResponseBase from "response-contracts/GatewayResponseBase";
    export default function invokeAsync<TRequest extends GatewayRequestBase, TResponse extends GatewayResponseBase>(host: string, userAgent: string, request: TRequest): Promise<TResponse>;
}
declare module "gateway-api/goScenarioAsync" {
    import Difficulty from "Difficulty";
    import GameInfoModel from "middle-contracts/GameInfoModel";
    import Scenario from "Scenario";
    import Stage from "Stage";
    export default function goScenarioAsync(gameInfoModel: GameInfoModel, scenario: Scenario, difficulty: Difficulty, stage: Stage, unitIds: number[]): Promise<object>;
}
declare module "request-contracts/GuestLoginRequest" {
    import Country from "Country";
    import Language from "Language";
    import NumBool from "NumBool";
    import Command from "Command";
    import GatewayRequestBase from "request-contracts/GatewayRequestBase";
    export default interface GuestLoginRequest extends GatewayRequestBase {
        command: Command.guestLogin;
        wizard_id: null;
        game_index: number;
        app_version: string;
        uid: number;
        did: number;
        channel_uid: number;
        push: 1;
        is_emulator: 0;
        country: Country;
        lang: Language;
        lang_game: 1;
        mac_address: string;
        device_name: string;
        os_version: string;
        token: '0000000000000000000000000000000000000000000000000000000000000000';
        idfv: '00000000-0000-0000-0000-000000000000';
        adid: string;
        binary_size: 0;
        binary_check: '';
        create_if_not_exist: NumBool;
    }
}
declare module "response-contracts/GuestLoginResponse" {
    import Difficulty from "Difficulty";
    import NumBool from "NumBool";
    import RuneClass from "RuneClass";
    import RuneQuality from "RuneQuality";
    import RuneSet from "RuneSet";
    import Scenario from "Scenario";
    import GatewayResponseBase from "response-contracts/GatewayResponseBase";
    import WizardInfoModel from "response-contracts/WizardInfoModel";
    import Slot from "Slot";
    interface ScenarioListItemModel {
        region_id: Scenario;
        difficulty: Difficulty;
        cleared: NumBool;
        stage_list: StageListItemModel[];
    }
    interface StageListItemModel {
        stage_no: number;
        cleared: NumBool;
    }
    interface DefenseUnitListItemModel {
        pos_id: number;
        unit_id: number;
    }
    interface BuildingListItemModel {
        building_id: number;
        island_id: number;
        building_master_id: number;
        pos_x: number;
        pos_y: number;
        gain_per_hour: number;
        harvest_max?: number;
        harvest_available?: number;
    }
    interface ObstacleListItemModel {
        obstacle_id: number;
        master_id: number;
        island_id: number;
        pos_x: number;
        pos_y: number;
    }
    interface UnitListItemModel {
        unit_id: number;
        island_id: number;
        building_id: number;
        unit_master_id: number;
        unit_level: number;
        class: number;
        con: number;
        atk: number;
        def: number;
        spd: number;
        resist: number;
        accuracy: number;
        critical_rate: number;
        critical_damage: number;
        experience: number;
        exp_gained: number;
        exp_gain_rate: number;
        runes: RunesItemModel[];
        create_time: string;
    }
    interface SummonSpecialInfoModel {
        this: number[];
        next: number[];
        next_remained: number;
        third: number[];
        third_remained: number;
        fourth: number[];
        fourth_remained: number;
    }
    interface InventoryInfoItemModel {
        item_master_type: number;
        item_master_id: number;
        item_quantity: number;
    }
    interface WishListModel {
        trial_remained: number;
        login_sequence: number;
        wish_sequence: number;
        next_update: number;
        item_list: WishListItemModel[];
        item_list_version: number;
    }
    interface WishListItemModel {
        item_master_type: number;
        item_master_id: number;
        amount: number;
    }
    interface RunesItemModel {
        rune_id: number;
        slot_no: Slot;
        rank: RuneQuality;
        class: RuneClass;
        set_id: RuneSet;
        upgrade_limit: number;
        upgrade_curr: number;
        sell_value: number;
    }
    export interface NpcFriendIndexItem {
        wizard_id: number;
        npc_friend_id: number;
        npc_friend_level: number;
        unit_master_id: number;
        unit_class: number;
        unit_level: number;
        last_assist: string;
        unit_id: number;
        next_assist_time: number;
    }
    interface NpcFriendIndex {
        [npc_friend_id: number]: NpcFriendIndexItem;
    }
    export default interface GuestLoginResponse extends GatewayResponseBase {
        wizard_info?: WizardInfoModel;
        scenario_list?: ScenarioListItemModel[];
        defense_unit_list?: DefenseUnitListItemModel[];
        building_list?: BuildingListItemModel[];
        obstacle_list?: ObstacleListItemModel[];
        unit_list?: UnitListItemModel[];
        summon_special_info?: SummonSpecialInfoModel;
        inventory_info?: InventoryInfoItemModel[];
        wish_list?: WishListModel;
        runes?: RunesItemModel[];
        npc_friend_list?: NpcFriendIndex;
    }
}
declare module "middle-contracts/VersionInfoModel" {
    export default interface VersionInfoModel {
        protocol: number;
        infocsv: string;
    }
}
declare module "request-contracts/GetVersionInfoRequest" {
    export default interface GetVersionInfoRequest {
        game_index: number;
    }
}
declare module "response-contracts/GetVersionInfoResponse" {
    export default interface GetVersionInfoResponse {
        version_data: VersionDataModel[];
        hub_test_server: number;
        download_gauge_count: number;
        background_download: number;
        game_values: GameValuesModel;
    }
    export interface VersionDataModel {
        game_index: string;
        topic: VersionDataTopic;
        name: string;
        version: string;
        cdnroot: string;
    }
    export enum VersionDataTopic {
        infocsv = "infocsv",
        cdnres = "cdnres",
        protocol = "protocol",
        ban_appid = "ban_appid",
        intro = "intro",
        text = "text"
    }
    export interface GameValuesModel {
        ag_enable: number;
        downloadlog_interval: number;
        emergency: number;
        emergency_hive_try: number;
        download_newuser: number;
        google_noti_integrate: number;
        media_menu_enable: number;
    }
}
declare module "version-info-api/invokeAsync" {
    export default function invokeAsync<TRequest, TResponse>(host: string, userAgent: string, request: TRequest): Promise<TResponse>;
}
declare module "version-info-api/getVersionInfoAsync" {
    import VersionInfoModel from "middle-contracts/VersionInfoModel";
    export default function getVersionInfoAsync(host: string, userAgent: string, gameIndex: number): Promise<VersionInfoModel>;
}
declare module "gateway-api/guestLoginAsync" {
    import Country from "Country";
    import Language from "Language";
    import GameInfoModel from "middle-contracts/GameInfoModel";
    export default function guestLoginAsync(host: string, userAgent: string, gameIndex: number, appVersion: string, userId: number, deviceId: number, country: Country, language: Language, macAddress: string, deviceName: string, osVersion: string, advertisingId: string, createIfNotExist: boolean): Promise<GameInfoModel>;
}
declare module "index" {
    import Difficulty from "Difficulty";
    import GameInfoModel from "middle-contracts/GameInfoModel";
    import Scenario from "Scenario";
    import Stage from "Stage";
    export default class Api {
        private gameInfoModel;
        constructor();
        login(): Promise<void>;
        readonly gameInfo: Nullable<GameInfoModel>;
        readonly units: Nullable<Unit[]>;
        goScenario(scenario: Scenario, difficulty: Difficulty, stage: Stage, unitIds: number[]): Promise<object>;
    }
    export interface Unit {
        id: number;
        type: string;
        attribute: string;
        awakened: boolean;
        level: number;
        class: number;
    }
}
