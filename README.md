# Caesar cipher

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running Caesar cipher

```
npm start
```

Usage example:

  -a (--action) is encode
>$ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
  input.txt This is secret. Message about "_" symbol!

output.txt Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!

$ node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt
plain.txt This is secret. Message about "_" symbol!

encoded.txt Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!

-a (--action) is decode
Decoding encoded initial string with the same -s(--shift) number produces the initial string.
$ node my_caesar_cli --action decode --shift 7 --input encoded.txt --output plain.txt
encoded.txt Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!

plain.txt This is secret. Message about "_" symbol!

(Optional) Negative shift handling
$ node my_caesar_cli --action encode --shift -1 --input plain.txt --output encoded.txt
plain.txt This is secret. Message about "_" symbol!

encoded.txt Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!


