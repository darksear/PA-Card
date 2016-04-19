//-------------------------------------------------------------
//-----------------Do not edit the XML tags--------------------
//-------------------------------------------------------------

//<AcroForm>
//<ACRO_source>Years:Annot1:MouseExit:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Years:Annot1:MouseExit:Action1 ***********/
event.value = (this.getField("Amount") / (this.getField("Years") * 12) + " A Month");
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>for:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:for:Calculate ***********/
event.value = ((this.getField("Amount").value / (this.getField("Years").value * 12)).toFixed(2) + " A Month");
//</ACRO_script>
//</AcroForm>


