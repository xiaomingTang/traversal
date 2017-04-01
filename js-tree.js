//完全二叉树
function FullBinTree(n){
  this.gene=n;
  this.frag=document.createDocumentFragment();
  (function init(){
    this.buildTree(this.frag,this.gene);
    return this.frag;
  })();
}
FullBinTree.prototype={
  constructor:FullBinTree,
  
  buildTree:function(elem,n){
    var left=this.newElem(),
        right=this.newElem();
    elem.appendChild(left);
    elem.appendChild(right);
    if(n--){
      this.buildTree(left,n);
      this.buildTree(right,n);
    }
  },
      

  newElem:function(){
    return document.createElement("div");
  }
}

document.body.appendChild(new FullBinTree(4));
