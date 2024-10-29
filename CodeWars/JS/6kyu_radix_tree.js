// https://www.codewars.com/kata/5c9d62cbf1613a001af5b067/train/javascript

function radixTree(...a) {  
    const add = (s, tr) => {
      if (s.length === 0) return;
      let ra = {};
      for (let i = s.length; i > 0; i--) {
        ra = Object.keys(tr).find(k => k.startsWith(s.slice(0,i)));      
        if (ra) {
          if (ra.length > i) {
            let na = {}
            na[ra.slice(i)] = tr[ra];
            tr[ra.slice(0, i)] = na;          
            add(s.slice(i), tr[ra.slice(0, i)])
            delete tr[ra];
          } else {
            add(s.slice(i), tr[ra]);
          }
          return
        }
      }
      tr[s] = {};
    };
    let tree = {};
    for (let s of a) {
      add(s, tree)    
    }
    return tree;
  }
  
if(require.main.path.includes('mocha')){
    const {assert}=require('chai')
    it("Example tests",()=>{
        assert.deepEqual( radixTree(), {} );
        assert.deepEqual( radixTree(""), {} );
        assert.deepEqual( radixTree("abc", "def", "ghi", "jklm", "nop"), { abc: {}, def: {}, ghi: {}, jklm: {}, nop: {} } );
        assert.deepEqual( radixTree("ape", "apple"), { ap: { e: {}, ple: {} } } );
        assert.deepEqual( radixTree("ape", "appendix", "apel"), { ap: { e: { l: {} }, pendix: {} } } );
        assert.deepEqual( radixTree("ape", "apple", "applet", "appendix"), { ap: { e: {}, p: { le: { t: {},}, endix: {} } } } );
        assert.deepEqual( radixTree("romane", "romanus", "romulus"), { rom: { an: { e: {}, us: {} }, ulus: {} } } );
        assert.deepEqual( radixTree("romane", "romanus", "romulus", "rubens", "rubicon", "rubicundus")
                        , { r: { om: { an: { e: {}, us: {} }, ulus: {} }, ub: { ens: {}, ic: { on: {}, undus: {} } } } }
                        );
        assert.deepEqual( radixTree("test", "tester", "testers"), { test: { er: { s: {} } } } );
        assert.deepEqual( radixTree("test", "tester", "testers", "tester"), { test: { er: { s: {} } } } );
        assert.deepEqual( radixTree("testers", "tester", "test"), { test: { er: { s: {} } } } );
      });
}else {
    console.log( radixTree(), {} );
    console.log( radixTree(""), {} );
    console.log( radixTree("abc", "def", "ghi", "jklm", "nop"), { abc: {}, def: {}, ghi: {}, jklm: {}, nop: {} } );
    console.log( radixTree("ape", "apple"), { ap: { e: {}, ple: {} } } );
    console.log( radixTree("ape", "appendix", "apel"), { ap: { e: { l: {} }, pendix: {} } } );
    console.log( radixTree("ape", "apple", "applet", "appendix"), { ap: { e: {}, p: { le: { t: {},}, endix: {} } } } );
    console.log( radixTree("romane", "romanus", "romulus"), { rom: { an: { e: {}, us: {} }, ulus: {} } } );
    console.log( radixTree("romane", "romanus", "romulus", "rubens", "rubicon", "rubicundus")
                    , { r: { om: { an: { e: {}, us: {} }, ulus: {} }, ub: { ens: {}, ic: { on: {}, undus: {} } } } }
                    );
    console.log( radixTree("test", "tester", "testers"), { test: { er: { s: {} } } } );
    console.log( radixTree("test", "tester", "testers", "tester"), { test: { er: { s: {} } } } );
    console.log( radixTree("testers", "tester", "test"), { test: { er: { s: {} } } } );
}