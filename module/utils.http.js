const HTTP_STATUS=
{
    CONTINUE:{
        code:100,
        msg:"Continue."
    },
    SWITCH_PROTOCOL:{
        code:101,
        msg:"Switch Protocol."
    },
    PROCESSING:{
        code:102,
        msg:"Processing."
    },
    OK:{
        code:200,
        msg:"Ok."
    },
    CREATED:{
        code:201,
        msg:"Resource Created."
    },
    ACCEPTED:{
        code:202,
        msg:"Accepted."
    },
    NON_AUTHORITATIVE:{
        code:203,
        msg:"Non Authoritative Information."
    },
    NO_CONTENT:{
        code:204,
        msg:"No Content"
    },
    RESET_CONTENT:{
        code:205,
        msg:"Reset Content."
    },
    PARTIAL_CONTENT:{
        code:206,
        msg:"Partial Content."
    },
    MULTI_STATUS:{
        code:207,
        msg:"Multi Status."
    },
    ALREADY_REPORTED:{
        code:208,
        msg:"Already Reported."
    },
    IM_USED:{
        code:226,
        msg:"IM Used."
    },
    MULTIPLE_CHOICE:{
        code:300,
        msg:"Multiple Choice."
    },
    MOVED_PERMANENTLY:{
        code:301,
        msg:"Moved Permanently."
    },
    FOUND:{
        code:302,
        msg:"Found."
    },
    SEE_OTHER:{
        code:303,
        msg:"See Other."
    },
    NOT_MODIFIED:{
        code:304,
        msg:"Not Modified."
    },
    USE_PROXY:{
        code:305,
        msg:"Ressource Created."
    },
    TEMPORARY_REDIRECT:{
        code:307,
        msg:"Ressource Created."
    },
    PERMANENT_REDIRECT:{
        code:308,
        msg:"Ressource Created."
    },
    BAD_REQUEST:{
        code:400,
        msg:"Bad Request."
    },
    UNAUTHORIZED:{
        code:401,
        msg:"Unauthorized."
    },
    PAYMENT_REQUIRED:{
        code:402,
        msg:"Payment Required."
    },
    FORBIDDEN:{
        code:403,
        msg:"Forbidden."
    },
    NOT_FOUND:{
        code:404,
        msg:"Not Found."
    },
    METHOD_NOT_ALLOWED:{
        code:405,
        msg:"Method Not Allowed."
    },
    NOT_ACCEPTABLE:{
        code:406,
        msg:"Not Acceptable."
    },
    PROXY_AUTHENTICATION_REQUIRED:{
        code:407,
        msg:"Proxy Authentication Required."
    },
    REQUEST_TIMEOUT:{
        code:408,
        msg:"Request Timeout."
    },
    CONFLICT:{
        code:409,
        msg:"Conflict."
    },
    GONE:{
        code:410,
        msg:"Gone."
    },
    LENGTH_REQUIRED:{
        code:411,
        msg:"Length Required."
    },
    PRECONDITION_FAILED:{
        code:412,
        msg:"Precondition Failed."
    },
    PAYLOAD_TOO_LARGE:{
        code:413,
        msg:"Payload Too Large."
    },
    REQUEST_URI_TOO_LONG:{
        code:414,
        msg:"Request-URI Too Long."
    },
    UNSUPPORTED_MEDIA_TYPE:{
        code:415,
        msg:"Unsupported Media Type."
    },
    RANGE_NOT_SATISFIABLE:{
        code:416,
        msg:"Request Range Not Satisfiable."
    },
    EXPECTATION_FAILED:{
        code:417,
        msg:"Expectation Failed."
    },
    I_M_A_TEAPOT:{
        code:418,
        msg:"I'm A Teapot."
    },
    MISDIRECTED_REQUEST:{
        code:421,
        msg:"Misdirected Request."
    },
    UNPROCESSABLE_ENTITY:{
        code:422,
        msg:"Unprocessable Entity."
    },
    LOCKED:{
        code:423,
        msg:"Locked."
    },
    FAILED_DEPENDENCY:{
        code:424,
        msg:"Failed Dependency."
    },
    UPGRADE_REQUIRED:{
        code:426,
        msg:"Upgrade Required."
    },
    PRECONDITION_REQUIRED:{
        code:428,
        msg:"Precondition Required."
    },
    TOO_MANY_REQUEST:{
        code:429,
        msg:"Too Many Request."
    },
    HEADER_FIELD_TOO_LARGE:{
        code:431,
        msg:"Request Header Field Too Large."
    },
    CLOSED_WITHOUT_RESPONSE:{
        code:444,
        msg:"Connection Closed Without Response."
    },
    UNAVAILABLE_FOR_LEGAL_REASONS:{
        code:451,
        msg:"Unavailable For Legal Reasons."
    },
    CLIENT_CLOSED_REQUEST:{
        code:499,
        msg:"Client Closed Request."
    },
    INTERNAL_SERVER_ERROR:{
        code:500,
        msg:"Internal Server Error."
    },
    NOT_IMPLEMENTED:{
        code:501,
        msg:"Not Implemented."
    },
    BAD_GATEWAY:{
        code:502,
        msg:"Bad Gateway."
    },
    Service_Unavailable:{
        code:503,
        msg:"Not Implemented."
    },
    GATEWAY_TIMEOUT:{
        code:504,
        msg:"Gateway Timeout."
    },
    HTTP_VERSION_NOT_SUPPORTED:{
        code:505,
        msg:"HTTP Version Not Supported."
    },
    VARIANT_ALSO_NEGOTIATES:{
        code:506,
        msg:"Variant Also Negotiate."
    },
    INSUFFICIENT_STORAGE:{
        code:507,
        msg:"Insufficient Storage."
    },
    LOOP_DETECTED:{
        code:508,
        msg:"Loop Detected."
    },
    NOT_EXTENDED:{
        code:510,
        msg:"Note Extended."
    },
    NETWORK_AUTHENTICATION_REQUIRED:{
        code:511,
        msg:"Network Authentication Required."
    },
    NETWORK_CONNECT_TIMEOUT_ERROR:{
        code:599,
        msg:"Network Connect Timeout Required."
    },
    
    
}

module.exports =HTTP_STATUS