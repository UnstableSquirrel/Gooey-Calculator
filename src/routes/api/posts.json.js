export const get = async() => {

    const res = await fetch("https://api.dexscreener.com/latest/dex/pairs/:polygon/:0x6F3Cc27E17a0f2e52D8e7693FF0d892Cea1854bF")

    /*let a = JSON.stringify(res);
    var b = JSON.parse(a);
    console.log(a);*/

    return {
        status: 200,
        body: await res.json()
    }
}