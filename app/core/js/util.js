var app = app || {};

//Module Instance
app.mi = app.mi||{};
app.module={}
//Generic Model
app.dm = app.dm || {};

//Generic View
app.dv = app.dv || {};

app.instance = app.instance || { dv: {}, dm: {}, dc: {} }

var ivalid = ivalid || {};
app.datalist = {}

app.ajaxCall=(args)=>{
    var jsondata={}
    let ajaxRet = null;
    var mData = { _ticket: app.getData("_ticket"), "_reload": app._reload};
    args.url = args.url||"";
    if(args.url == ""){
        alert("Insufficient data to make a server call.");
        return Promise.reject("Insufficient data to make a server call.");
    };
    args.jsondata = args.jsondata||{}
    app._spin=(args.preventSpin)?false:true;
    jsondata = Object.assign(args.jsondata,mData)    
    ajaxRet= $.ajax({
                    url: app.applicationurl + "" + args.url,
                    type: "POST",
                    data: jsondata 
    }); 
    app._spin = true;              
    return ajaxRet;
}

app.filterDatalist=function(el, filters) {
    var opts = [],
        vData = [],
        vCF = "",
        vNF = "",
        vDL = "",
        $el = $(el);
    vCF = $el.data("codefield");
    vNF = $el.data("namefield");
    vDL = $el.data("datalist");
    if (this.datalist[vDL]) {
        opts[opts.length] = ($el.data('allowblank')) ? "<option></option>" : "";
        vData = _.where(app.datalist[vDL].data, filters);
        _.each(vData, function (data) {
            opts[opts.length] = "<option value='" + data[vCF] + "'>" + data[vNF] + "</option>"
        })
    }
    $el.html(opts.join(" ")) //.trigger("change");
    //app.materialRender();
    $el.trigger("change");
}
app.getData = function (param) {
    if (param)
      return window.sessionStorage.getItem(param);
    else ""
  }