CREATE OR REPLACE
VIEW v_sender
AS
SELECT
  `b2g`(`arlog_data`.`arlog_dataid`) AS `id`,
  `arc_md`.`name` AS `modulename`,
  `armd_chaneltype`.`name` AS `chtype`,
  `arlog_data`.`trynumber` AS `trynumber`,
  `arlog_data`.`finished` AS `finished`,
  `arlog_data`.`sendresult` AS `sendresult`,
  `arlog_data`.`sendtime` AS `sendtime`,
  `arc_chanel`.`ch_param` AS `ch_param`,
  `arsms_data`.`smstime` AS `smstime`,
  `arsms_data`.`pop_ok` AS `pop_ok`,
  `arsms_data`.`roof_open` AS `roof_open`,
  `arsms_data`.`power_ok` AS `power_ok`,
  `arsms_data`.`temperature` AS `temperature`,
  `arc_info`.`family` AS `family`,
  `arc_info`.`name` AS `name`,
  b2g(`arc_md`.`arc_mdid`) AS mdid
FROM (((((`arlog_data`
  JOIN `arsms_data`
    ON ((`arlog_data`.`sms` = `arsms_data`.`arsms_dataid`)))
  JOIN `arc_chanel`
    ON ((`arlog_data`.`chanel` = `arc_chanel`.`arc_chanelid`)))
  JOIN `armd_chaneltype`
    ON ((`arc_chanel`.`ch_taype` = `armd_chaneltype`.`armd_chaneltypeid`)))
  JOIN `arc_md`
    ON ((`arc_chanel`.`parentstructrowid` = `arc_md`.`arc_mdid`)))
  JOIN `arc_info`
    ON ((`arc_md`.`instanceid` = `arc_info`.`instanceid`)));
	
	
	
CREATE TABLE armodule_state (
  
  armdid binary(16) NOT NULL,
  pop_ok int(11) DEFAULT NULL,
  roof_open  int(11) DEFAULT NULL,
  power_ok int(11) DEFAULT NULL,
  temperature int(11) DEFAULT NULL,
  PRIMARY KEY (armdid)
)
CHARACTER SET utf8
COLLATE utf8_general_ci;