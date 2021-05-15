# Caesar Cipher CLI Tool

This is a command line (CLI) application. It encodes/decodes text using [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher). Only English alphabet letters are encrypted, all other characters kept untouched. Shift can be greater than alphabet lenth, lower than zero. Input text could be from input file or `stdin`, output could be written to output file or `stdout`.

<br>

If you meet a bug, please, let me know through:
- Telegram: [@handway](http://t.me/handway)
- Creating issue in repository: https://github.com/ratomsky/nodejs-caesar-cipher
  There is [bug report template](https://gist.github.com/ratomsky/61015b176d7fedd0159c974d372819e7) for your
  comfort :)

<br>

## How to Install

1. Clone this repo to your computer:
```bash
git clone https://github.com/ratomsky/nodejs-caesar-cipher.git
```

2. Go to root folder (named „caesar-cipher-cli“ originally):
```bash
cd caesar-cipher-cli
```

3. Install dependencies:
```bash
npm i
```

<br>

## How to Use

You can сreate two files somewhere with the txt extension
  
  the first file will take text
  the third file will save decode or encode text  

```
  node my-caesar-cli (Options)
```

### Options 

>You should run the application with the next **required** options:

| Option | Short form | Description |Value type |
|--------|---|-------------|-----------|
| _--action_  | _-a_ | choose action (encode or decode) | encode or decode |
| _--shift_ |_-s_| choose cipher's key - shift value | _number_ |  

<br>
  
>You can run the application with the next _optional_ options: 

| Option | Short form | Description |Value type |
|--------|---|-------------|-----------|
| _--input_ | _-i_ | "filepath", choose input file (default input from `stdin`) | _string_ |
| _--output_ | _-o_ | "filepath", choose output file (default output to `stdout`) | _string_ |

<br>

### Restrictions and rules

- Only English letters will be encrypted. Everything else will go as it is.
- If you don't provide input file path, app will ask you to type text for encrypting. You could provide as many
  strings as you want. For exiting from the process, please, press `Ctrl + C` on your keyboard.
- If you don't provide output file path, app will show encrypted text in console.
  

<br>

## 🔨 Examples

1. _-a (--action)_ is **encode**  

```bash
$ node caesar-cipher-cli.js -a encode -s 7 -i "./input.txt" -o "./output.txt"
```
> input.txt  
> `This is secret. Message about "_" symbol!`

> output.txt  
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

2. _-a (--action)_ is **decode**  

_Decoding encoded initial string with the same -s(--shift) number produces the initial string._

```bash
$ node caesar-cipher-cli.js --action decode --shift 7 --input encoded.txt --output decoded.txt
```
> encoded.txt  
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

> decoded.txt  
> `This is secret. Message about "_" symbol!`

3. Negative shift handling

```bash
$ node caesar-cipher-cli.js --action encode --shift -1 --input plain-negative.txt --output encoded-negative.txt
```

> plain-negative.txt  
> `This is secret. Message about "_" symbol!`

> encoded-negative.txt  
> `Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!`



&nbsp;
##### Author: [Max <@ratomsky>](https://github.com/ratomsky/)
