CREATE 
FUNCTION getclientsms(
 aclientid varchar(38)
, arowid varchar(38)
)
  RETURNS tinyint(1)
  READS SQL DATA
begin  
  declare existscnt int;  
  
  select count(*) into existscnt from arsms_data
  join armd_info on armd_info.serialno=arsms_data.serialno
  join arc_md on arc_md.mymodule=armd_info.armd_infoid
  where arc_md.instanceid =g2b(aclientid) ;
  if existscnt = 0 then
     return 0;
  end if;

 return 1;
end