import { React,useState } from 'react'
import './App.css'

function App() {
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [email,setEmail]=useState("");
  const [contact,setContact]=useState("");
  const [gender,setGender]=useState("");
  const [subjects,setSubjects]=useState({
    english:true,
    maths:false,
    physics:false});
  const [resume,setResume]=useState("");
  const [url,setUrl]=useState("");
  const [selectedOption,setSelectedOption]=useState("");
  const [about,setAbout]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      contact,
      gender,
      selectedOption,
      subjects,
      resume,
      url,
      about,
    );
  }
  const handleSubjectChange=(sub)=>{
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
  }));
  }
  const handleReset=()=>{
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("");
    setSubjects({
      english:true,
      maths:false,
      physics:false,
    });
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("");


    

  };



  

  return (
    <>
    <h1>Form in React</h1>
    <form>
      <label for="firstName">FirstName*</label>
      <input type="text"name="firstName"value={firstName}
      on change={(e)=>setFirstName(e.target.value)}
      placeholder="enter first name"required/>
      <label for="lastName">LastName*</label>
      <input type="text"name="lastname"value={lastName}
      on change={(e)=>setLastName(e.target.value)}
      placeholder="enter last name"required/>
      <label for="email">enter your email*</label>
      <input type="text"name="email"value={email}
      on change={(e)=>setEmail(e.target.value)}
      placeholder="enter your email"required/>
      <label for="contact">enter your contact*</label>
      <input type="text"name="contact"value={contact}
      on change={(e)=>setContact(e.target.value)}
      placeholder="enter your contact"required/>
      <label for="gender">Gender*</label>
      <input type="radio"value="male"
      id="male"
      checked={gender=="male"}
      onchange={(e)=>setGender(e.target.value)}/>Male
      <input type="radio"value="female"
      id="female"
      checked={gender=="female"}
      onchange={(e)=>setGender(e.target.value)}/>Female
      <input type="radio"value="others"
      id="others"
      checked={gender=="others"}
      onchange={(e)=>setGender(e.target.value)}/>Others
      <label for="subjects">Enter your subject</label>
      <input type="checkbox"name="lang"id="eng"checked={subjects.english==true}
     onChange={(e)=>handleSubjectChange("english")}/>English
      <input type="checkbox"name="lang"id="maths"checked={subjects.maths==true}
      onChange={(e)=>handleSubjectChange("maths")}/>Maths
      <input type="checkbox"name="lang"id="phy"checked={subjects.physics==true}
      onChange={(e)=>handleSubjectChange("physics")}/>Physics
      <label for="file">upload resume</label>
      <input type="file"name="file"id="file"onChange={(e)=>setResume(e.target.files[0])}
      placeholder='upload files'required/>
      <label for="url">Enter url*</label>
      <input type="url"name="url"id="url"onChange={(e)=>setUrl(e.target.value)}
      placeholder='enter url'required/>
      <label>Select Your Choice</label>
      <select name="select"id="select"value="select"onChange={(e)=>setSelectedOption(e.target.value)}>
        <option value=" ">select your answer</option>
        <optgroup label='beginers'>
          <option value="1">Html</option>
          <option value="2">css</option>
          <option value="3">c</option>
          <option value="4">c++</option>
          <option value="5">phython</option>
        </optgroup>
        <optgroup label='advance'>
          <option value="6">react</option>
          <option value="7">node</option>
          <option value="8">express</option>
          <option value="9">mongodb</option>
          <option value="10">stack</option>
        </optgroup>
      </select>
      <label for="about">About</label>
      <textarea name="about"id="about"cols="30"rows="10"
      onChange={(e)=>setAbout(e.target.value)} placeholder='about yourself'required></textarea>
      <button type="reset"value="reset"onClick={()=>handleReset()}>Reset</button>
      <button type="submit"value="submit"onClick={()=>handleSubmit()}>submitt</button>
    </form>



      
    </>
  )

}
export default App
