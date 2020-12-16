function convertText (text) {
  const asciiToText = [];
  const textToAscii = [];
  
  for (let j = 0; j < text.length; j++){
    textToAscii.push(...alphaOnly(text[j]));
  }

  if (textToAscii.length) {
    if (text.length == textToAscii.length) {
       return convertTextToAscii(text);
  } else {
      const toAsciiOrText = [];
      console.log('texttt', text);
      const getCharsIndex = text
    }
  } else {
    return convertAsciiToText(text);
  }
}

const convertAsciiToText = (asciiCodes) => {
  const asciiToText = [];
  for (let i = 0; i < asciiCodes.length;) {
    const num = asciiCodes[i] === '1' ? 3 : 2;
    asciiToText.push(asciiCodes.substr(i, num));
    i += num;
  }
  return String.fromCharCode(...asciiToText);
}

const convertTextToAscii = (sentence) => {
  const textToAscci = [];
  for (let i = 0; i < sentence.length; i++) {
    textToAscci.push(sentence.charCodeAt(i));
  }
  return textToAscci.join('');
}

function alphaOnly(a) {
  let b = '';
  for (let i = 0; i < a.length; i++) {
      if (a[i] >= 'A' && a[i] <= 'z') b += a[i];
  }
  return b;
}

const string3 = 'J97v97115c114105112t';
console.log('String 3:', convertText(string3));
          
const string2 = '74971189711599114105112116';
console.log('String 2:', convertText(string2));

const string1 = "Javascript";
console.log('String 1:', convertText(string1));