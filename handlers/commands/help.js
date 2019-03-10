require("dotenv").config();

// this is for groups

const helpMsg = `Command reference:
/start - Start bot
/tip - Tip a user in XRP
/market - Market tickers/price
/subscribe - Subscribe to XRP Community Blog
/unsubscribe - Unsubscribe to XRP Community Blog

***Note***: This commands only work in groups
`;

class HelpHandler {
    constructor(app, db) {
        this.app = app;
        this.db = db;
    }

    setHandler() {
        this.app.command('help', (ctx) => {
            const {replyWithMarkdown} = ctx;
            return replyWithMarkdown(helpMsg)
        })
    }
}

module.exports = HelpHandler;