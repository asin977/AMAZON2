import {formatCurrency} from '../../scripts/utils/money.js';

//  describe("A suite is just a function", function() {
//         let a;
      
//         it("and so is a spec", function() {
//           a = true;
      
//           expect(a).toBe(true);
        
//         });
 
//     });

describe('test suits : formatCurrency',()=>{
    it('converts cents into dollars',()=>{
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('Works with 0',()=>{
        expect(formatCurrency(0)).toEqual('0.00');

    });
    it('rounds up to the nearest cent',()=>{
        expect(formatCurrency(2000.5)).toEqual('20.01');

    });
});

