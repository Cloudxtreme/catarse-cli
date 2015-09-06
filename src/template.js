//A mithril component template for {{name}}
window.c.{{name}}= (function(c, m, h){
  return {
    controller: function(args){
      //Controller should work as view scoping. Any data modification should stay on View-Model files. 
      //We do not use the this keyword here or anywhere else, unless strictily necessary.
      return {
        data: data
      };
    },
    view: function(ctrl, args){
      return m('h1', 'Hello World! Template for component {{name}} working!');
    }
  };
}(window.c, window.m, window.c.h));
