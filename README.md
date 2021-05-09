# Caesar cipher

Program for encrypting and decrypting text using the Caesar cipher.

## Downloading

```
git clone {repository URL}
```

## Running Caesar cipher

You can сreate two files somewhere with the txt extension
  
  the first file will take text
  the third file will save decode or encode text

From command line in folder src run  

```
  node my-caesar-cli (with arguments)
```

## Arguments that can be attached

-s, --shift: (necessarily) a shift

-i, --input: specify the path if you created it

-o, --output: specify the path if you created it

-a, --action: (necessarily) an action encode/decodee
  
## Usage example:

  -a (--action) is encode
>$ node my-caesar-cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
  input.txt This is secret. Message about "_" symbol!

output.txt Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!

>$ node my-caesar-cli --action encode --shift 7 --input plain.txt --output encoded.txt
plain.txt This is secret. Message about "_" symbol!

encoded.txt Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!

-a (--action) is decode
Decoding encoded initial string with the same -s(--shift) number produces the initial string.
>$ node my-caesar-cli --action decode --shift 7 --input encoded.txt --output plain.txt
encoded.txt Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!

plain.txt This is secret. Message about "_" symbol!

(Optional) Negative shift handling
>$ node my-caesar-cli --action encode --shift -1 --input plain.txt --output encoded.txt
plain.txt This is secret. Message about "_" symbol!

encoded.txt Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!


