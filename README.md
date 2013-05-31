About
=============

A hexavigesimal numeral system has a base of twenty-six. See http://en.wikipedia.org/wiki/Hexavigesimal for more details.

This short JS function converts a Number to "Bijective base-26" - i.e. the numbering system used by Microsoft Excel and other spreadsheets for row and column numbering.

Examples
```javascript
Number(1).toBijectiveBase26();    // => "A"
Number(26).toBijectiveBase26();   // => "Z"
Number(27).toBijectiveBase26();   // => "AA"
Number(28).toBijectiveBase26();   // => "AB"
```
