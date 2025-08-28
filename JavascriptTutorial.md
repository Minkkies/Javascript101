# Reference From
Document from: [Doc](https://docs.mikelopster.dev/c/web101/chapter-5/intro)<br>
Document from: [Doc2](https://www.w3schools.com/js/default.asp)<br>
Document from: [Mikelopster](https://www.youtube.com/watch?v=XQdyV_x4UKA&list=PLwZ0y9k-cYXCSSU3ujBqBWMbtZcW2OGkA&index=5)<br>

<hr>

## `<script>`
สำหรับใช้งาน javascript นั้นปกติจะมี 2 ตำแหน่งที่สามารถวางได้

1. การวางไว้ใน head = ให้ script run ก่อนโดยยังไม่สนใจว่าหน้าจอแสดง DOM ส่วนเนื้อหาเสร็จไหม
````html
<head>
  <script>
    console.log('Hello world')
  </script>
</head>
<body>
  <!-- comment -->
</body>
````
2. การวางไว้ใน body (เหมือนเคสตัวอย่างด้านบน) = ให้ script run หลังจาก DOM ออกมาครบแล้ว (ส่วนใหญ่จะวางไว้ตรงนี้)

   ซึ่งการจะวางที่ 1 หรือ 2 นั้นจะขึ้นอยู่กับว่า เราจะทำอะไรกับ HTML ด้วยหรือไม่ใน javascript ซึ่งส่วนใหญ่ถ้าต้องจัดการ HTML ก็มักจะวางในตำแหน่ง body เพื่อให้สามารถ access HTML element (DOM) ได้

   รวมถึง javascript เองก็สามารถแยกไฟล์และ import เข้ามาจากไฟล์ข้างนอกได้ 
  เช่น ถ้าเราสร้างไฟล์ index.js และในไฟล์มี 
  ```js
  console.log('Hello world')
  ``` 
  และที่ index.html ให้เปลี่ยน tag script เป็นการนำเข้าผ่าน src มาแทน
  ````html
  <body>
  /* comment */
  // comment
  <script src="index.js"></script>
  </body>
  ````
**ผลลัพธ์เหมือนกัน**
![alt text](img/console.gif)

## `<prompt>`
นี่คือหน้าตาของ prompt<br>
![prompt](img/prompt.jpg)

## 1. variables
การประกาศตัวแปร จะขึ้นต้นด้วย
* let สำหรับตัวแปรที่สามารถเปลี่ยนค่าได้
* const สำหรับตัวแปรที่ไม่สามารถเปลี่ยนค่าได้ (ค่าคงที่)
````js
let firstname = 'mike' // ประกาศตัวแปรชื่อ firstname เก็บ string เอาไว้ชื่อ 'mike'
let isCheck = false // ประกาศตัวแปรชื่อ isCheck เก็บ boolean แบบ false

// เมื่อต้องการเปลี่ยนค่าตัวแปร ให้ประกาศชื่อตัวแปรนั้น และ assign ค่าใหม่เข้าได้เลย

isCheck = true // เปลี่ยนค่า isCheck ใหม่เป็น true
firstname = 'newmike' // เปลี่ยนค่า firstname ใหม่เป็นชื่อ newmike
````
`console.log('My name is',name)`<br>
![alt text](img/console.jpg)

* string

    ```js
    let firstname = 'apin' 
    ```

* number

    ```js
    let age = 20 
    ```

* bool

    ```js
    let isThai = true
    ```

* object

    วิธีประกาศ obj ธรรมดา

    ```js
    let std = {
        age: 30,
        name: 'mike',
        grade: 'A'
    }
    ```

    วิธีประกาศ obj array

    ```js
    let std = [{
        age: 30,
        name: 'mike',
        grade: 'A'
    },{
        age: 20,
        name: 'mm',
        grade: 'B'
    }]
    ```
## 2. Operator
* operator +, -, *, /, %

```js
let num1 = 'test'
let num2 = 'num'

let num3 = num1 + num2 //+ ใช้ต่อ string 
console.log('new number is', num3)
```


* condition &&, ||, ! ใช้เหมือน c++

```js
let score = prompt('input your score') //input
console.log('your score ', score)      //output

if (score >= 80) {
    console.log('GRAD : A')
} else if (score >= 50) {
    console.log('GRAD : D')
} else {
    console.log('GRAD : F')
}
```

## 3. Loop

```js
console.log('------ while  loop -----')
let count1 = 0
while (count1 < 10) {
    console.log(count1)
    count1 = count1 + 1 
}

console.log('------ for loop -----')
for (let count2= 0; count2 < 10; count2++) {
    console.log(count2)
    
}
```

## 4.Array
มี function ไว้เรียกใช้งานเช่น
* push 
* pop
* sort     เรียงจาก น้อย-> มาก
* includes เช็คว่ามีสิ่งนั้นอยู่ในลิสหรือป่าว

```js
let ages = [22,20,24]

console.log('length of list:' ,ages.length)
for (let index = 0; index < ages.length; index++) {
    console.log(ages[index])
    
}
//ใช้แบบนี้ในการเข้าถึงง่ายกว่า ถ้าจะแค่ output
console.log(ages) 

```

**ตัวอย่าง** array.push()

```js
ages.push(28)
console.log(ages) 
```

**ตัวอย่าง** ages.pop()

```js
ages.pop()
console.log(ages)
```


**ตัวอย่าง** .ages.sort

```js
console.log('----- sort -----')
console.log(ages)
ages.sort()
console.log(ages)
```

**ตัวอย่าง**  ages.includes 

```js
if (ages.includes(22)) {
    console.log('you have 22 in list')
}
```

## 5. function
function มี 3 แบบ

* function ปกติ

**ตัวอย่าง** function ปกติ

```js
function calculation(score) {
    
    if (score >= 80) {
        grade = 'A'
    } else if (score >= 50) {
        grade = 'D'
    } else {
        grade = 'F'
    }

    return grade
}

let score1 = 80
let score2 = 50

let grade1 = calculation(score1)
let grade2 = calculation(score2)

console.log('grade:', grade1 , grade2)
```
* arrow function

คือ function ปกติ ที่เอามาเขียนในรูปย่อ จะเห็นความแตกต่างและตัวอย่างการใช้งานได้ชัดเจนขึ้นในหัวข้อที่ **6.Object**

**ตัวอย่าง** arrow function

```js
let calculation = (score) => {
    
    if (score >= 80) {
        grade = 'A'
    } else if (score >= 50) {
        grade = 'D'
    } else {
        grade = 'F'
    }

    return grade
}
```

* paramiter function

คือ functon ที่มี paramitor เป็น function อีกที ในหัวข้อนี้จะแนะนำอีก 3 function ที่จะเอามาเป็นตัวอย่างการใช้ paramiter function ได้แก่

* .map( )       เข้าถึงและทำไรบางอย่างกับค่าของ obj
* .forEach( )   เข้าถึง ใช้แทน for-loop
* .filter( )    จะ คืนค่า array ใหม่ ที่มีเฉพาะสมาชิกที่ตรงตามเงื่อนไข

**ตัวอย่าง** paramiter function (.map() +.forEach( ))

```js
let score = [10,20,30,40]

for (let index = 0; index < score.length; index++) {
    console.log('score:', score[index])
    
}

//map 
score = score.map((s) => {
    return s * 2
})

//forEach
score.forEach((s) => {
    console.log('new score', s)
})
```

**ตัวอย่าง** paramiter function (.filter +.forEach( ))

```js
let score = [10,20,30,40]

for (let index = 0; index < score.length; index++) {
    console.log('score:', score[index])
    
}

let newScore = score.filter((s) =>{
    return s >= 30    //อันนีี้คือย่อของแบบล่าง ภ้า if เช็ค true false เขียนบรรทัดเดียวแบบนี้ได้
    /*if (s >= 30) {
        return true
    } else {
        return false
    }*/
})

newScore.forEach((i) => {
    console.log('new score:', i)
})
```

## 6.Object
ทวนวิธีประกาศและ การเข้าถึง attribute ด้วย .

```js
let std = {
    age: 30,
    name: 'mike',
    grade: 'A'
}

console.log(std.age) 
console.log(std.name)
console.log(std.grade)
```

ใช้การ loop เพื่อเข้าถึงหรือดู output

```js
for (let index = 0; index < std.length; index++) {
    console.log('\nstd no.', (index+1))
    console.log('name :', std[index].name)
    console.log('age  :', std[index].age)
    console.log('grade:', std[index].grade)
    
}
```

ใช้ push, pop ได้เหมือน array

```js
std.push({ 
    age:25,
    name: 'AA',
    grade: 'C'
})
```

## Function คืออะไร ?
Function คือ ชุดคำสั่งที่ทำการรวมกันเอาไว้ และให้เรียกใช้ผ่าน function ออกมาแทนได้
ตัวอย่างการประกาศ function นั้นมี 2 วิธีคือ
* function functionName() {} = ประกาศโดยให้ function นำหน้า
* const functionName = () => {} = ประกาศแบบ arrow function

โดย functionName สามารถกำหนดชื่อเองได้ (วิธีกำหนดเหมือนกำหนดชื่อตัวแปร)
สามารถจัดเรียงข้อมูลและปรับเปลี่ยนข้อมูลใหม่ได้ เช่น
* .find = เป็นคำสั่งค้นหา
* .sort = สำหรับการเรียงข้อมูลใหม่
* .map = สำหรับการวนลูปตัวแปร และ update ตัวแปรใหม่ออกมา
* .filter = สำหรับการ filter array เอาเฉพาะ condition ที่ต้องการออกมา

หาว่ามีค่านั้นๆอยู่ใน obj ไหม

**ตัวอย่าง** .find()

```js
let stds = [
    {
        name: 'mike',
        score: 80,
        grade: 'A'
    },
    {
        name: 'AA',
        score: 50,
        grade: 'D' 
    }
]
```


**ตัวอย่าง** .map()

```js
    let doubleScore = stds.map((s) => {
        s.score =  s.score * 2
        return s
    })
    console.log('double Score:', doubleScore)
```

**ตัวอย่าง** .filter ()

```js
let hightScore = stds.filter((s) => {
    if(s.score >= 60){
        return true
    }
})
console.log('hight Score:', hightScore)
```
---------------------------------
# Javascript & Html
ห้วข้อนี้เราจะพูดถึงการที่ javascript สามารถสื่อสารกับ html (DOM) ได้ 
ปกติเราจะแบ่งไอเดียง่ายๆออกเป็น 2 แบบคือ
1. javascript access ไปยัง html (DOM)
2. html ส่ง Event ไปยัง javascript

# Select DOM
### Idea การ select dom
การสื่อสารประเภทแรกคือ การสื่อสารจาก javascript เลือกไปยัง html โดย เราจะต้องเลือกเป้าหมาย 2 อย่างก่อนคือ

1. เลือกใคร (html element ตัวไหน)
2. ทำอะไร (เช่น ดึงค่าออกมา, แทนค่า)

# วิธี Select DOM แต่ละประเภท
การ Select ไปยัง DOM html ทำได้ผ่านตัวแปร document ซึ่งเป็นตัวแปรที่ใช้สื่อสารระหว่าง javascript และ content ใน page (ซึ่งในที่นี้คือ HTML)

1. **document.getElementById** ใส่ id กำกับใน html เพื่อทำการดึงค่าออกมา

*`ตัวอย่าง`* ใส่ id ใน input text firstname เพื่อทำการใช้ระบุสำหรับดึง value
````
<input id="firstname" type="text" name="firstname" value="ทดสอบ">

... 
<script>
let firstname = document.getElementById('firstname')

// สำหรับแสดง DOM html ออกมา
console.log('firstname DOM', firstname)

// สำหรับการดึงค่า value ออกมา
console.log('firstname DOM', firstname.value)
</script>
````
2. **document.getElementByClassname** ใส่ class กำกับใน html เพื่อทำการดึงค่าออกมา

*`ตัวอย่าง`* ใส่ class กำกับไว้กับ input type checkbox 2 ตัวชื่อ "interest" แล้วดึงค่า value จาก checkbox ออกมา
````
<input class="interest" type="checkbox" name="interest" value="หนังสือ"> หนังสือ
<input class="interest" type="checkbox" name="interest" value="กีฬา"> กีฬา

<script>
let interests = document.getElementByClassname('interests')

// สำหรับแสดง DOM html ออกมา (เป็น Array เนื่องจากมีหลายอัน)
console.log('interests', interests)

// สำหรับดึงค่า value ใน checkbox ออกมาทั้งหมด
for (let i = 0; i < interests.length; i++) {
    console.log(interests[i].value)
}

</script>
````
3. **document.querySelector** สำหรับ select ตาม CSS Selector แบบเดียวกับ CSS แต่เลือกเป็นตัวเดียว(อ่านเพิ่มเติม CSS Selector)

*`ตัวอย่าง`* ตามด้านล่าง ต้องการเลือกไปยัง element input ที่มี Attribute type=text ตัว firstname
````
<!-- การใส่ value ใน input text = การใส่ค่า default ของกล่องนั้นเข้าไป -->
ชื่อจริง <input type="text" name="firstname" value="ชื่อ"> <br>
...
<script>
let inputText = document.querySelector('input[type=text]')

// ดึงค่า value จาก inputText
console.log('input value', inputText.value)
</script>
````
4. **document.querySelectorAll** สำหรับ select ตาม CSS Selector แบบเดียวกับ CSS แต่เลือกเป็นหลายตัวได้ (อ่านเพิ่มเติม CSS Selector)

*`ตัวอย่าง`* ตามด้านล่าง ต้องการเลือกไปยัง element input type=radio ทั้ง 3 ตัว โดยที่ดึง value ออกมาแสดง
````
<input type="radio" name="gender" value="ชาย"> ชาย
<input type="radio" name="gender" value="หญิง"> หญิง
<input type="radio" name="gender" value="ไม่ระบุ"> ไม่ระบุ

...

<script>
let inputsRadio = document.querySelectorAll('input[type=radio]')

// inputsRadio ได้ออกมาเป็น Array ต้อง loop แสดงค่า value
for (let i = 0; i < inputsRadio.length; i++) {
    console.log('input value', inputsRadio[i].value)
}
</script>
````