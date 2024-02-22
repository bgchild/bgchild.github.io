(window.webpackJsonp=window.webpackJsonp||[]).push([[535],{889:function(s,n,e){"use strict";e.r(n);var a=e(0),t=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("ul",[n("li",[s._v("选中tables")]),s._v(" "),n("li",[s._v("ctrl + shift +x 然后运行脚本")])]),s._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[s._v('\'******************************************************************************\nOption Explicit\n   Dim rowsNum\n   rowsNum = 0\n\'-----------------------------------------------------------------------------\n\' Main function\n\'-----------------------------------------------------------------------------\n\' Get the current active model\n    Dim Model\n    Set Model = ActiveModel\n    If (Model Is Nothing) Or (Not Model.IsKindOf(PdPDM.cls_Model)) Then\n       MsgBox "The current model is not an PDM model."\n    Else\n      \' Get the tables collection\n      \'创建EXCEL APP\n      dim beginrow\n      DIM EXCEL, SHEET, SHEETLIST\n      set EXCEL = CREATEOBJECT("Excel.Application")\n      EXCEL.workbooks.add(-4167)\'添加工作表\n      EXCEL.workbooks(1).sheets(1).name ="表结构"\n      set SHEET = EXCEL.workbooks(1).sheets("表结构")\n      \n      EXCEL.workbooks(1).sheets.add\n      EXCEL.workbooks(1).sheets(1).name ="目录"\n      set SHEETLIST = EXCEL.workbooks(1).sheets("目录")\n      ShowTableList Model,SHEETLIST\n\n      ShowProperties Model, SHEET,SHEETLIST\n      \n      \n      EXCEL.workbooks(1).Sheets(2).Select\n      EXCEL.visible = true\n      \'设置列宽和自动换行\n      sheet.Columns(1).ColumnWidth = 20 \n      sheet.Columns(2).ColumnWidth = 20 \n      sheet.Columns(3).ColumnWidth = 20 \n      sheet.Columns(4).ColumnWidth = 40 \n      sheet.Columns(5).ColumnWidth = 10 \n      sheet.Columns(6).ColumnWidth = 10 \n      sheet.Columns(1).WrapText =true\n      sheet.Columns(2).WrapText =true\n      sheet.Columns(4).WrapText =true\n      \'不显示网格线\n      EXCEL.ActiveWindow.DisplayGridlines = False\n      \n      \n End If\n\'-----------------------------------------------------------------------------\n\' Show properties of tables\n\'-----------------------------------------------------------------------------\nSub ShowProperties(mdl, sheet,SheetList)\n   \' Show tables of the current model/package\n   rowsNum=0\n   beginrow = rowsNum+1\n   Dim rowIndex \n   rowIndex=3\n   \' For each table\n   output "begin"\n   Dim tab\n   For Each tab In mdl.tables\n      ShowTable tab,sheet,rowIndex,sheetList\n      rowIndex = rowIndex +1\n   Next\n   if mdl.tables.count > 0 then\n        sheet.Range("A" & beginrow + 1 & ":A" & rowsNum).Rows.Group\n   end if\n   output "end"\nEnd Sub\n\'-----------------------------------------------------------------------------\n\' Show table properties\n\'-----------------------------------------------------------------------------\nSub ShowTable(tab, sheet,rowIndex,sheetList)\n   If IsObject(tab) Then\n     Dim rangFlag\n     rowsNum = rowsNum + 1\n      \' Show properties\n      Output "================================"\n      sheet.cells(rowsNum, 1) =tab.name\n      sheet.cells(rowsNum, 1).HorizontalAlignment=3\n      sheet.cells(rowsNum, 2) = tab.code\n      \'sheet.cells(rowsNum, 5).HorizontalAlignment=3\n      \'sheet.cells(rowsNum, 6) = ""\n      \'sheet.cells(rowsNum, 7) = "表说明"\n      sheet.cells(rowsNum, 3) = tab.comment\n      \'sheet.cells(rowsNum, 8).HorizontalAlignment=3\n      sheet.Range(sheet.cells(rowsNum, 3),sheet.cells(rowsNum, 7)).Merge\n      \'设置超链接，从目录点击表名去查看表结构\n      \'字段中文名    字段英文名    字段类型    注释    是否主键    是否非空    默认值\n      sheetList.Hyperlinks.Add sheetList.cells(rowIndex,2), "","表结构"&"!B"&rowsNum\n      rowsNum = rowsNum + 1\n      sheet.cells(rowsNum, 1) = "字段中文名"\n      sheet.cells(rowsNum, 2) = "字段英文名"\n      sheet.cells(rowsNum, 3) = "字段类型"\n      sheet.cells(rowsNum, 4) = "注释"\n      sheet.cells(rowsNum, 5) = "是否主键"\n      sheet.cells(rowsNum, 6) = "是否非空"\n      sheet.cells(rowsNum, 7) = "默认值"\n      \'设置边框\n      sheet.Range(sheet.cells(rowsNum-1, 1),sheet.cells(rowsNum, 7)).Borders.LineStyle = "1"\n      \'sheet.Range(sheet.cells(rowsNum-1, 4),sheet.cells(rowsNum, 9)).Borders.LineStyle = "1"\n      \'字体为10号\n      sheet.Range(sheet.cells(rowsNum-1, 1),sheet.cells(rowsNum, 7)).Font.Size=10\n            Dim col \' running column\n            Dim colsNum\n            colsNum = 0\n      for each col in tab.columns\n        rowsNum = rowsNum + 1\n        colsNum = colsNum + 1\n          sheet.cells(rowsNum, 1) = col.name\n        \'sheet.cells(rowsNum, 3) = ""\n          \'sheet.cells(rowsNum, 4) = col.name\n          sheet.cells(rowsNum, 2) = col.code\n          sheet.cells(rowsNum, 3) = col.datatype\n        sheet.cells(rowsNum, 4) = col.comment\n          If col.Primary = true Then\n        sheet.cells(rowsNum, 5) = "Y" \n        Else\n        sheet.cells(rowsNum, 5) = " " \n        End If\n        If col.Mandatory = true Then\n        sheet.cells(rowsNum, 6) = "Y" \n        Else\n        sheet.cells(rowsNum, 6) = " " \n        End If\n        sheet.cells(rowsNum, 7) =  col.defaultvalue\n      next\n      sheet.Range(sheet.cells(rowsNum-colsNum+1,1),sheet.cells(rowsNum,7)).Borders.LineStyle = "3"       \n      \'sheet.Range(sheet.cells(rowsNum-colsNum+1,4),sheet.cells(rowsNum,9)).Borders.LineStyle = "3"\n      sheet.Range(sheet.cells(rowsNum-colsNum+1,1),sheet.cells(rowsNum,7)).Font.Size = 10\n      rowsNum = rowsNum + 2\n      \n      Output "FullDescription: "       + tab.Name\n   End If\n   \nEnd Sub\n\'-----------------------------------------------------------------------------\n\' Show List Of Table\n\'-----------------------------------------------------------------------------\nSub ShowTableList(mdl, SheetList)\n   \' Show tables of the current model/package\n   Dim rowsNo\n   rowsNo=1\n   \' For each table\n   output "begin"\n   SheetList.cells(rowsNo, 1) = "主题"\n   SheetList.cells(rowsNo, 2) = "表中文名"\n   SheetList.cells(rowsNo, 3) = "表英文名"\n   SheetList.cells(rowsNo, 4) = "表说明"\n   rowsNo = rowsNo + 1\n   SheetList.cells(rowsNo, 1) = mdl.name\n   Dim tab\n   For Each tab In mdl.tables\n     If IsObject(tab) Then\n         rowsNo = rowsNo + 1\n      SheetList.cells(rowsNo, 1) = ""\n      SheetList.cells(rowsNo, 2) = tab.name\n      SheetList.cells(rowsNo, 3) = tab.code\n      SheetList.cells(rowsNo, 4) = tab.comment\n     End If\n   Next\n    SheetList.Columns(1).ColumnWidth = 20 \n      SheetList.Columns(2).ColumnWidth = 20 \n      SheetList.Columns(3).ColumnWidth = 30 \n     SheetList.Columns(4).ColumnWidth = 60 \n   output "end"\nEnd Sub\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br"),n("span",{staticClass:"line-number"},[s._v("96")]),n("br"),n("span",{staticClass:"line-number"},[s._v("97")]),n("br"),n("span",{staticClass:"line-number"},[s._v("98")]),n("br"),n("span",{staticClass:"line-number"},[s._v("99")]),n("br"),n("span",{staticClass:"line-number"},[s._v("100")]),n("br"),n("span",{staticClass:"line-number"},[s._v("101")]),n("br"),n("span",{staticClass:"line-number"},[s._v("102")]),n("br"),n("span",{staticClass:"line-number"},[s._v("103")]),n("br"),n("span",{staticClass:"line-number"},[s._v("104")]),n("br"),n("span",{staticClass:"line-number"},[s._v("105")]),n("br"),n("span",{staticClass:"line-number"},[s._v("106")]),n("br"),n("span",{staticClass:"line-number"},[s._v("107")]),n("br"),n("span",{staticClass:"line-number"},[s._v("108")]),n("br"),n("span",{staticClass:"line-number"},[s._v("109")]),n("br"),n("span",{staticClass:"line-number"},[s._v("110")]),n("br"),n("span",{staticClass:"line-number"},[s._v("111")]),n("br"),n("span",{staticClass:"line-number"},[s._v("112")]),n("br"),n("span",{staticClass:"line-number"},[s._v("113")]),n("br"),n("span",{staticClass:"line-number"},[s._v("114")]),n("br"),n("span",{staticClass:"line-number"},[s._v("115")]),n("br"),n("span",{staticClass:"line-number"},[s._v("116")]),n("br"),n("span",{staticClass:"line-number"},[s._v("117")]),n("br"),n("span",{staticClass:"line-number"},[s._v("118")]),n("br"),n("span",{staticClass:"line-number"},[s._v("119")]),n("br"),n("span",{staticClass:"line-number"},[s._v("120")]),n("br"),n("span",{staticClass:"line-number"},[s._v("121")]),n("br"),n("span",{staticClass:"line-number"},[s._v("122")]),n("br"),n("span",{staticClass:"line-number"},[s._v("123")]),n("br"),n("span",{staticClass:"line-number"},[s._v("124")]),n("br"),n("span",{staticClass:"line-number"},[s._v("125")]),n("br"),n("span",{staticClass:"line-number"},[s._v("126")]),n("br"),n("span",{staticClass:"line-number"},[s._v("127")]),n("br"),n("span",{staticClass:"line-number"},[s._v("128")]),n("br"),n("span",{staticClass:"line-number"},[s._v("129")]),n("br"),n("span",{staticClass:"line-number"},[s._v("130")]),n("br"),n("span",{staticClass:"line-number"},[s._v("131")]),n("br"),n("span",{staticClass:"line-number"},[s._v("132")]),n("br"),n("span",{staticClass:"line-number"},[s._v("133")]),n("br"),n("span",{staticClass:"line-number"},[s._v("134")]),n("br"),n("span",{staticClass:"line-number"},[s._v("135")]),n("br"),n("span",{staticClass:"line-number"},[s._v("136")]),n("br"),n("span",{staticClass:"line-number"},[s._v("137")]),n("br"),n("span",{staticClass:"line-number"},[s._v("138")]),n("br"),n("span",{staticClass:"line-number"},[s._v("139")]),n("br"),n("span",{staticClass:"line-number"},[s._v("140")]),n("br"),n("span",{staticClass:"line-number"},[s._v("141")]),n("br"),n("span",{staticClass:"line-number"},[s._v("142")]),n("br"),n("span",{staticClass:"line-number"},[s._v("143")]),n("br"),n("span",{staticClass:"line-number"},[s._v("144")]),n("br"),n("span",{staticClass:"line-number"},[s._v("145")]),n("br"),n("span",{staticClass:"line-number"},[s._v("146")]),n("br"),n("span",{staticClass:"line-number"},[s._v("147")]),n("br"),n("span",{staticClass:"line-number"},[s._v("148")]),n("br"),n("span",{staticClass:"line-number"},[s._v("149")]),n("br"),n("span",{staticClass:"line-number"},[s._v("150")]),n("br"),n("span",{staticClass:"line-number"},[s._v("151")]),n("br"),n("span",{staticClass:"line-number"},[s._v("152")]),n("br"),n("span",{staticClass:"line-number"},[s._v("153")]),n("br"),n("span",{staticClass:"line-number"},[s._v("154")]),n("br"),n("span",{staticClass:"line-number"},[s._v("155")]),n("br"),n("span",{staticClass:"line-number"},[s._v("156")]),n("br"),n("span",{staticClass:"line-number"},[s._v("157")]),n("br"),n("span",{staticClass:"line-number"},[s._v("158")]),n("br"),n("span",{staticClass:"line-number"},[s._v("159")]),n("br"),n("span",{staticClass:"line-number"},[s._v("160")]),n("br"),n("span",{staticClass:"line-number"},[s._v("161")]),n("br"),n("span",{staticClass:"line-number"},[s._v("162")]),n("br"),n("span",{staticClass:"line-number"},[s._v("163")]),n("br"),n("span",{staticClass:"line-number"},[s._v("164")]),n("br"),n("span",{staticClass:"line-number"},[s._v("165")]),n("br"),n("span",{staticClass:"line-number"},[s._v("166")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);