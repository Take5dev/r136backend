module.exports = {
  afterCreate(event) {
    const { result } = event;
    strapi.plugins["email"].services.email.send({
      to: "max.digital@yandex.ru",
      from: "php.del.by@gmail.com",
      subject: "New Request from the website",
      text: `Hello Denis,<br />there is a new request from the website<br /><br />Name: <b>${result.Name}</b><br />Title: <b>${result.Title}</b><br />Company: <b>${result.Company}</b><br />Country: <b>${result.Country}</b><br />Email: <b>${result.Email}</b><br />Cover letter: <b>${result.message}</b>`,
    });
  },
};
