const sentenceTag = document.querySelector('input[type="text"]');
const typesizeTag = document.querySelector('input[name="typesize"]');
const lineheightTag = document.querySelector('input[name="lineheight"]');
const italicTag = document.querySelector('input[name="italic"]');
const uppercaseTag = document.querySelector('input[name="uppercase"]');
const typefaceTag = document.querySelector('select[name="typeface"]');
const letterspacingTag = document.querySelector('input[name="letterspacing"]');
const fontweightTag = document.querySelector('input[name="fontweight"]');

const outputTag = document.querySelector(".output");
const originalText = outputTag.innerHTML;

const colorTags = document.querySelectorAll(".colors>div");

window.onload = document.querySelector("textarea").focus();

// when i type in my sentence tag, update the output tag accordingly
// sentenceTag.addEventListener("keyup", function() {
//   if (this.value) {
//     outputTag.value = this.value;
//   } else {
//     outputTag.value = originalText;
//   }
// });


// when i type in my output tag, update the sentence tag accordingly
outputTag.addEventListener("keyup", function() {
  sentenceTag.value = this.value;
})


// typesize slider change
typesizeTag.addEventListener('input', function () {
  outputTag.style.fontSize = `${this.value}px`;
  document.querySelector("label>span").innerHTML = `${this.value}px`;
})

// lineheight slider change
lineheightTag.addEventListener('input', function () {
  outputTag.style.lineHeight = `${this.value}%`;
  document.querySelector('label[for="lineheight"]>span').innerHTML = `${this.value}%`;
})

// letterspacing slider change
letterspacingTag.addEventListener('input', function () {
  outputTag.style.letterSpacing = `${this.value}px`;
  document.querySelector('label[for="letterspacing"]>span').innerHTML = `${this.value}px`;
})

// fontweight slider change
fontweightTag.addEventListener('input', function () {
  outputTag.style.fontWeight = this.value;
  document.querySelector('label[for="fontweight"]>span').innerHTML = this.value;
})

// typeface change
typefaceTag.addEventListener('input', function () {
  outputTag.style.fontFamily = this.value;
})

// italic slider change
italicTag.addEventListener("change", function () {
  if (this.checked) {
    outputTag.style.fontStyle = 'italic';
  } else {
    outputTag.style.fontStyle = 'normal';
  }
})

// uppercase slider change
uppercaseTag.addEventListener("change", function () {
  if (this.checked) {
    outputTag.style.textTransform = 'uppercase';
  } else {
    outputTag.style.textTransform = 'none';
  }
})

// color change
colorTags.forEach(tag => {
  tag.addEventListener("click", function () {
    outputTag.style.backgroundColor = this.style.backgroundColor;
    outputTag.style.color = this.style.color;

    colorTags.forEach(tag => {
      tag.classList.remove("selected");
      tag.classList.remove("selected-black");
    });

    if (tag.classList.contains("white-tag")) {
      tag.classList.add("selected-black");
    } else {
      tag.classList.add("selected");
    }

  })
});
