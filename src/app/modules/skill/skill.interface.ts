export type TTechnicalSkill = {
  icon: string;
  source: string;
  label: string;
};

export type TSoftSkill = {
  content: string;
};

export type TSkill = {
  technical: TTechnicalSkill[];
  soft: TSoftSkill[];
};
