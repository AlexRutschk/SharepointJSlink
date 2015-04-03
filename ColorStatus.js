(function () {
    var overrideCtx = {};
    overrideCtx.Templates = {};
    overrideCtx.OnPostRender = [AddColorCode];
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(overrideCtx);
})();

// This library requires that you have a column containing the values in the colors array
// see screenshot in this repository, JsLinkForColorStatus.jpg
    
function AddColorCode(inCtx) {
  var colors = ["Red", "Yellow", "Green"]
  var contrastingText = {"red": "white", "yellow": "black", "green": "white"}
  var officialShade = {"red": "#DC143C", "yellow": "#FFFF33", "green": "#008000"}
	for (var i = 0; i < inCtx.ListData.Row.length; ++i) {
        var listItem = inCtx.ListData.Row[i];
        var iid = GenerateIIDForListItem(inCtx, listItem);
        var row = document.getElementById(iid);
        
        if (row != null) {
        for (var i_cell=0; i_cell < row.cells.length; ++i_cell) {
          if(colors.indexOf(row.cells[i_cell].innerHTML) > -1) {
             rowColor = row.cells[i_cell].innerHTML.toLowerCase()
             row.cells[i_cell].style.backgroundColor = officialShade[rowColor.toLowerCase()];
             row.cells[i_cell].style.color = contrastingText[rowColor.toLowerCase()];
          }
        }
        }

    inCtx.skipNextAnimation = true;
  }
}
