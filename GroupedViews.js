(function () {
    var overrideCtx = {};
    overrideCtx.Templates = {};
    overrideCtx.Templates.Header = "<table>";
    overrideCtx.Templates.Footer = "</table>";
    overrideCtx.OnPostRender = [ChangeCategoryHeadings];
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(overrideCtx);
})();

//The before/after photos in the repository show a standard Sharepoint view with a "Group By" column set on the left, with this JSLink on the right. 
//The groups must be set to "expanded". Group By and Expanded are options are in your Create View interface.

    
function ChangeCategoryHeadings() {
  headings = document.getElementsByClassName('ms-gb');
  for (i in headings) {
       headings[i].style.borderBottom = "3px solid #228B22";
       headings[i].style.color = "#191970";
       headings[i].style.fontSize = "14px";
       temp=headings[i].innerText.split(' ');
       if (temp.indexOf(":") > 0) {
         temp.splice(0, (temp.indexOf(":"))+1)  // the first few elements will be "column" "name" "here", ":"
         temp.splice(temp.length-1, 1)        // the last element will be the number of items in parentheses
         headings[i].innerHTML = temp.join(); //Join the remaining items
       }
  }
}

