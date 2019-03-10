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
