(function () {
    var overrideCtx = {};
    overrideCtx.Templates = {};
    overrideCtx.OnPostRender = [HighlightRowOverride, positionPagingControl];
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(overrideCtx);
})();
// To see results, view the image AlternateLineShading_Pagination.js in this repository

//purpose: add the "Go to the Last" and "Go to the First" buttons/links, instead of clicking so many times to go to the last item/row
function positionPagingControl (ctx) {    
    document.getElementById("pagination").innerHTML = pagingControl(ctx);
  }

function pagingControl (ctx) {
  
    console.log('hello world from pagingControl');
    console.log(ctx.ListData);
        var firstRow = ctx.ListData.FirstRow;
        var lastRow = ctx.ListData.LastRow;
        var prev = ctx.ListData.PrevHref;
        var next = ctx.ListData.NextHref;
        var imgSrc = '/_layouts/15/images/spcommon.png?rev=23';
        var imgClass = 'ms-promlink-button-';
        var spanClass = 'ms-promlink-button-image';
        var aClass = 'ms-commandLink ms-promlink-button ms-promlink-button-enabled';
        var html = "<div class='Paging'>";
        html += prev ? "<a class='"+ aClass +"' href='" + prev + "'><span class='"+spanClass+"'><img class='"+imgClass+"left'  src='"+ imgSrc +"' /></span></a>" : "";
        html += "<span class='ms-paging'><span class='First'>" + firstRow + "</span> - <span class='Last'>" + lastRow + "</span></span>";
        html += next ? "<a class='"+ aClass +"' href='" + next + "'><span class='"+spanClass+"'><img class='"+imgClass+"right' src='"+ imgSrc +"'/></span></a>" : "";
        html += "</div>";
        return html;
    }
    
//purpose: add shaded or lines to distinguish rows from each other.
function HighlightRowOverride(inCtx) {
	for (var i = 0; i < inCtx.ListData.Row.length; ++i) {
        var listItem = inCtx.ListData.Row[i];
        var iid = GenerateIIDForListItem(inCtx, listItem);
        var row = document.getElementById(iid);

        if (i % 2 == 1) {
        if (row != null)
         	row.style.backgroundColor = "#EEEEEE"; }
    }
    inCtx.skipNextAnimation = true;
}