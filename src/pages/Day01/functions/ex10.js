export default (text) => {
    const links = /<a(.+)</g;
    const title =/e=(.+)</;
    const html = '<html><head><title>Nice page</title></head>\n' +
        '<body>Hello World <a href=http://cyan.com title="a link">This is a link</a>\n' +
        '<br /><a href=http://www.riven.com> And this too <img src=wrong.image title="And also this"></a>\n' +
        '</body></html>';
    const found = html.replace(links, (a) => {
      return a.replace(title, (a) => {
          return a[0] + a.substr(1, a.length).toUpperCase()
      })
    });
    return found
}