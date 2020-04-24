====================
CONTENT TO COPY-PASTE TO CREATE A NEW EVENT / NEWS / NOTICE / FACULTY CAREER / TENDER, etc

***** Copy Paste the Code below *****
*************************************

"shortNoticeName": {
        "description": "descriptionAboutTheNotice.",
        "url": "/some/url",
        "isNew": true
    },

************************************

NOTE:
In place of,

"shortEventName": add the short name of the Notice.

"descriptionAboutTheEvent": add the description of the Notice. 

"url": add the url of the notice. The URL of the notice should be correct to reach the correct path.
        For a dead URL, leave URL space as blank ("").
        
"isNew": It contains only, "true" or "false". Other values would make functioning of website abnormal. 


====================
What is JSON?

JSON (JavaScript Object Notation) is a lightweight data-interchange format. 
It is easy for humans to read and write. 
It is easy for machines to parse and generate.
Because of these reasons, I have used format to store data and it will be used to update EVENTS, NEWS and NOTICES.

====================
JSON Format?

The sample format for JSON is
    
    {"key", "value"}

For example, 

    { "JSON" : "JSON stands for JavaScript Object Notation"}

Here,
    "JSON" is the key, and 
    "JSON stands for JavaScript Object Notation" is the value.

====================

Can JSON Object be nested?

Yes, JSON object can be nested. 
The object can be nested and can be made more complex as shown

{
    "key1" : {
        "subkey1" : "value",
        "subkey1" : "value"
    },

    "key2" : {
        "subkey1" : "value",
        "subkey2" : "value"
    }
}

For example,

{
    "event1" : {
        "description" : "Some Description",
        url: "some/url/"
    }

}
====================
