function submitData () {
  let firstNameDOM = document.querySelector('input[name=firstname]')
  let lastNameDOM = document.querySelector('input[name=lastname]')
  let ageDOM = document.querySelector('input[name=age]')

  //checked คือการเลือกที่ถูกติ๊ก
  let genderDOM = document.querySelector('input[name=gender]:checked')//เลือกแค่ตัวที่ถูกติ๊กได้ตัวเดียว
  let interestDOMs = document.querySelectorAll('input[name=interest]:checked')//เลือกได้หลายตัว
  //textarea ไม่มี value แต่ใช้ innerText หรือ value ก็ได้
  let descriptionDOM = document.querySelector('textarea[name=description]')
  
  //interestDOMs เป็น list ต้องเอามาต่อกัน
  let interest = '' //string ว่าง

  //loop แต่ละตัวที่ถูกติ๊ก
  for (let i = 0; i < interestDOMs.length; i++) {
    interest += interestDOMs[i].value

    //ถ้าไม่ใช่ตัวสุดท้ายให้เติม , ต่อท้าย
    if (i != interestDOMs.length - 1) {
      interest += ', ' 
    }
  }

 //สร้าง object เก็บข้อมูล
 //property กับ value
 //property = ชื่อ key
 //value = ข้อมูล
 // key กับ value จะต้องตรงกับที่ฟอร์มกำหนดมา
  let userData = {
    firstname: firstNameDOM.value,
    lastname: lastNameDOM.value,
    age: ageDOM.value,
    gender: genderDOM.value,
    description: descriptionDOM.value,
    interest: interest //string ที่ต่อกัน
  }
  
  //แสดงข้อมูล
  console.log('submit data', userData)
}