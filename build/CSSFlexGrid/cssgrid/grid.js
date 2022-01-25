var cellObj = {
  initcount: 9,   // init css target with elements
  maxitems: 50,
  selected : "",  // id of currently selected grid cell
  items:{},       // created elements individual data
  gridcustomprops: [], // new grid css properties
  gridprops : [
      "grid-template",
      "grid-template-columns",
      "grid-template-rows",
      "grid-auto-rows",
      "gap",
      "grid-template-areas",
      "grid-auto-flow"
    ],
  cellprops : [
      "grid-column",
      "grid-row",
      "grid-area"
  ]
};

$(function(){

  // init Options

  // element amount select
  let elselect = $("#elselect");
  let eloptions = "";
  for(let i=1;i<= cellObj.maxitems;i++){
    let sel = i == cellObj.initcount ? "selected" : "";
    eloptions += `<option value="${i}" ${sel}>${i}</option>`;
  }
  elselect.append(eloptions);

  // global elements and input objects
  const gridcontainer = $("#gridcontainer");
  const gtcinput = $("#" + cellObj.gridprops[1]); // grid-template-columns
  const gtrinput = $("#" + cellObj.gridprops[2]); // grid-template-rows
  const garinput = $("#" + cellObj.gridprops[3]); // grid-auto-rows
  const gginput = $("#" + cellObj.gridprops[4]);  // grid-gap
  const gtainput = $("#" + cellObj.gridprops[5]); // grid-template-areas
  const gafinput = $("#" + cellObj.gridprops[6]); // grid-auto-flow
  const gridcss = $("#grid-custom-css");

  // cell properties
  const gcinput = $("#" + cellObj.cellprops[0]);  // grid-column
  const grinput = $("#" + cellObj.cellprops[1]);  // grid-row
  const gainput = $("#" + cellObj.cellprops[2]);  // grid-area
  const cccss = $("#cell-custom-css");
  const cchtml = $("#cell-custom-html");

  // Initial grid container styling
    let iciValArray = [
      "", // not initializing grid-template
      gtcinput.val(),
      gtrinput.val(),
      garinput.val(),
      $.trim(gginput.val()),
      gtainput.val(),
      gafinput.val()
    ];
    for(let c=1;c<cellObj.gridprops.length;c++){
      gridcontainer.css(cellObj.gridprops[c], iciValArray[c]);
    }


  // Create Grid Elements and Global object structures
  var initElements = function(n){
    let els = "";
    // reset items on element amount change
    cellObj.items = {};

    for(let i=1; i<=n; i++){
      let elid = numberToWords.toWords(i);
      els += `<div id="${elid}" class="eldiv">${elid}</div>`;
      // create object structure for custom css and html storage on each element
      cellObj.items[elid] = {};
      cellObj.items[elid]['custom'] = [];
      cellObj.items[elid]['html'] = ``;
    }
    gridcontainer.html(els);  // output created elements

  };
  initElements(cellObj.initcount);

  // Special item selection on click
  $(document).on("click", ".eldiv", function(e){
    let elid = $(this).attr("id");
    $(".eldiv").not(document.getElementById(elid)).removeClass("active");
    $(this).toggleClass("active");
    if($(this).hasClass("active")){
       $("#celloptionsGrid").show();
    }else{
       $("#celloptionsGrid").hide();
    }

    cellObj.selected = elid;
    selectCellUpdate();

  });

  // Display Grid (container) properties
  function gridUpdate(){
    let propArray = cellObj.gridprops;
    let customArray = [];

    // add new custom css properties for display by argument or by stored object values
    customArray = cellObj.gridcustomprops;
    propArray = propArray.concat(customArray);

    let styleProps = gridcontainer.css(propArray);
    let cssoutput = "";
      $.each(styleProps, function(prop, value){
        prop = $.trim(prop);
        value = $.trim(value);
        cssoutput+= `<div><b>${prop}</b> : ${value}</div>`;
      });
    $("#gridcssdisplay").find("div").html(cssoutput);

  }
  gridUpdate();

  // Update Cell Properties and Display Summary
  function selectCellUpdate(){

    cellObj.selected = cellObj.selected == "" ? "one" : cellObj.selected;

    let cdc = $("#cellcssdisplay");
    cdc.find("h2").html(`cell <span class="highlight">${cellObj.selected}</span> Computed Properties`);

    let selObj = $("#" + cellObj.selected);
    let propArray = cellObj.cellprops;
    let customArray = [];

    // add new custom css properties for display by argument or by stored object values
    customArray = cellObj.items[cellObj.selected].custom || [];
    propArray = propArray.concat(customArray);

    let styleProps = selObj.css(propArray);
    let cssoutput = "";
      $.each(styleProps, function(prop, value){
        prop = $.trim(prop);
        value = $.trim(value);
        cssoutput+= `<div><b>${prop}</b> : ${value}</div>`;
        // set corresponding input value for each property
        $("#" + prop).val(value);
      });

    // display current individual cell styles
    cdc.find("div").html(cssoutput);

      let customProps = selObj.css(customArray);
      let customoutput = "";
      $.each(customProps, function(prop, value){
        customoutput+= `${prop}: ${value};\n`;
      });
      // set current element style code to custom css input
      cccss.val(customoutput);

    // repopulate any custom html input
      cchtml.val(cellObj.items[cellObj.selected].html);

  }

  // Modify Grid (Container) inline style then synchronize all other values
  function gridChangeHandler(which,val){
    gridcontainer.css(which, val);
    gridUpdate();
  }

  // Modify individual cell inline style then synchronize all other values
  function cellChangeHandler(which,val){
      $("#" + cellObj.selected).css(which,val);
    selectCellUpdate();
  }

  function gridCSSHandler(val){

    // remove returns/new lines and exterior spaces
    // and remove last semicolon for correct split
    val = val.replace(/[\n\r]+/g,'').trim();
    val = val.slice(0,val.length-1);

      let styleArray = val.split(";");
      let propArray = []; // custom props to add to cellObj

      for(let s=0;s<styleArray.length;s++){
        let defArray = styleArray[s].trim().split(":");
        propArray[s] = defArray[0];
        gridcontainer.css(defArray[0],defArray[1]);
      }

    //store custom css prop names in gridcontainer
    cellObj.gridcustomprops = propArray;

    // synchronize only CUSTOM props in propArray to the element's inline style attribute
    // combine propArray with cellObj.gridcustomprops as only these should exist
    let synchPropArray = propArray.concat(cellObj.gridprops);
    let inlineStyle = gridcontainer.attr("style");
    // create comparative inline style property array to synchPropArray
    let inlineStyleArray = inlineStyle.split(";");
    let inlinePropArray = [];
      for(let i=0;i<inlineStyleArray.length-1;i++){
        inlineStyleArray[i] = inlineStyleArray[i].trim();
        inlinePropArray[i] = inlineStyleArray[i].split(":")[0].trim();
      }
    // console.log(`inline styles: ${inlinePropArray}\nsynch styles: ${synchPropArray}`);

    // if property in inlinePropArray is not in synchPropArray, delete that inline style
    $.each(inlinePropArray, function(idx, val){
      let idxresult = !!~$.inArray(val, synchPropArray);
      !idxresult ? gridcontainer.css(val,"") : null;
    });

    gridUpdate();
  }

  function cellCSSHandler(val){
    let selectedElement = $("#" + cellObj.selected);
    // remove returns/new lines and exterior spaces
    // remove trailing semicolon for correct split
    val = val.replace(/[\n\r]+/g,'').trim();
    val = val.slice(0,val.length-1);

      let styleArray = val.split(";"); // we get a bad value for the last semicolon
      let propArray = []; // custom props to add to cellObj

      for(let s=0;s<styleArray.length;s++){
        let defArray = styleArray[s].trim().split(":");
        propArray[s] = defArray[0];
        selectedElement.css(defArray[0],defArray[1]);
      }

    //store custom css prop names in cellObj
    cellObj.items[cellObj.selected].custom = propArray;

    // synchronize only CUSTOM props in propArray to the element's inline style attribute
    // combine propArray with cellObj.cellprops as only these should exist
    let synchPropArray = propArray.concat(cellObj.cellprops);
    let inlineStyle = selectedElement.attr("style");
    // create comparative inline style property array to synchPropArray
    let inlineStyleArray = inlineStyle.split(";");
    let inlinePropArray = [];
      for(let i=0;i<inlineStyleArray.length-1;i++){
        inlineStyleArray[i] = inlineStyleArray[i].trim();
        inlinePropArray[i] = inlineStyleArray[i].split(":")[0].trim();
      }

    // if property in inlineStyleArray is not in synchPropArray, delete that inline style
    $.each(inlinePropArray, function(idx, val){
      let idxresult = !!~$.inArray(val, synchPropArray);
      !idxresult ? selectedElement.css(val,"") : null;
    });

    selectCellUpdate();
  }

  function cellHTMLHandler(val){
    $("#" + cellObj.selected).html(val);
    cellObj.items[cellObj.selected].html = val;
    selectCellUpdate();
  }

  /*** element amount change listener ***/
  $("#elselect").on("change", function(){
    initElements($(this).val());
    gridUpdate();
    selectCellUpdate();
  });

  /*** Grid Listners ***/
  gtcinput.on("change", function() { gridChangeHandler(cellObj.gridprops[1], $(this).val()) });
  gtrinput.on("change", function() { gridChangeHandler(cellObj.gridprops[2], $(this).val()) });
  garinput.on("change", function() { gridChangeHandler(cellObj.gridprops[3], $(this).val()) });
  gginput.on("change", function() { gridChangeHandler(cellObj.gridprops[4], $(this).val()) });
  gtainput.on("change", function() { gridChangeHandler(cellObj.gridprops[5], $(this).val()) });
  gafinput.on("change", function() { gridChangeHandler(cellObj.gridprops[6], $(this).val()) });
  gridcss.on("change", function(){ gridCSSHandler($(this).val()) });

  /*** Selected Cell Listeners ***/
  gcinput.on("change", function(){ cellChangeHandler(cellObj.cellprops[0], $(this).val()) });
  grinput.on("change", function(){ cellChangeHandler(cellObj.cellprops[1], $(this).val()) });
  gainput.on("change", function(){ cellChangeHandler(cellObj.cellprops[2], $(this).val()) });

  /*** Custom cell values listeners ***/
  cccss.on("change", function(){ cellCSSHandler($(this).val()) });
  cchtml.on("change", function(){ cellHTMLHandler($(this).val()) });

  /*** window listeners ***/
  $(window).on("resize", function(){
    gridUpdate();
    selectCellUpdate();
  });

});
