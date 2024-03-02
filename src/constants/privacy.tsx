export const PrivacyPolicy = [
    {
        title: '',
        description: (
            <span>
                This document entails the privacy policy and agreement that you accept when adding any of Team Hydra&apos;s bots to a
                server, or as a member of such a server. This document does not supersede the{' '}
                <a href="https://discordapp.com/developers/docs/legal" className="text-green-600 underline">
                    Discord Developer Terms of Service
                </a>
                .
            </span>
        ),
    },
    {
        title: 'Bots, Services, and Servers',
        description: 'This document applies to any and all services operated and powered by Team Hydra.',
    },
    {
        title: 'Terminology',
        description: (
            <span>
                <b>• Server Manager</b> - Anyone who has the ability to add a bot to a server or configure the bot for the server.
                <br />
                <b>• Server Member</b> - Anyone who is a member of server to which one of the bots has been added.
                <br />
                <b>• Service User</b> - Anyone who authorizes an application (logs in) for a scope that provides additional information, or
                using a site. These scopes and information provided to us is listed in the OAuth connection with Discord.
                <br />
            </span>
        ),
    },
    {
        title: 'Data Collected By Command',
        description: (
            <span>
                The following items may be collected and stored when intentionally provided by a user (usually by means of a command). This
                data will not be collected automatically, and only when a user interacts directly with our bots and services. When providing
                data in this way, you forego any rights to the content of the data provided. <br />
                <br />
                • Links to external accounts, e-mail addresses, timezones, identification information (profiles / ID&apos;s)
                <br />
                • Server configurations, and settings
                <br />
                • Selected roles and emojis
                <br />
                • Archives of messages manually selected by a moderator (automatically deleted within 3 months)
                <br />
                • Data and content for automated tasks (reminders, workers)
                <br />
                • Saved references, urls, or text (tags, playlists)
                <br />
                • Transaction ID&apos;s from payment gateways
                <br />• Discord user, message, and server ID&apos;s to store configurations listed above
            </span>
        ),
    },
    {
        title: 'Data Collected When Enabled',
        description: (
            <span>
                These items will be automatically collected if a bot is configured to perform certain actions by a server manager. These
                features are always opt-in, and thus this data will not be collected unless the corresponding feature is enabled. <br />
                <br />
                • Logs of chat messages (serverlogs - retained for 3 months) <br />
                • List of a member&apos;s roles (role persistence) <br />
                • Avatar URLs (Dashboard) <br />• Nickname data (Changelogging)
            </span>
        ),
    },
    {
        title: 'Data Collected via Authorization',
        description: (
            <span>
                This data may be collected when authorizing an application, such as when logging in to a site via Discord Oauth2. This data
                is also outlined on the authorization page. <br />
                <br />
                • Username, Discord ID, Avatar Data <br />
                • SaaS data that you upload / provide yourself <br />
                • List of guilds (servers) your account is connected to <br />
                • E-mail address <br />• OAuth Connections you link within our services
            </span>
        ),
    },
    {
        title: 'Data Storage',
        description:
            'All stored data is kept on protected servers. While storage methods vary, most data is kept within password-protected distributed MariaDB servers. Please keep in mind that even with these protections, no data can ever be 100% secure. All efforts are taken to keep your data secure and private, with countless security measures.',
    },
    {
        title: 'Feedback',
        description:
            "Feedback on any and all provided bots and services is appreciated. When you submit comments, suggestions, bug reports, and any other forms of feedback, you forego any rights to the content, title, or intent of the provided feedback. Additionally, the feedback may be utilized in any way, and subject to GitHub's Terms of Service and Privacy Policy.",
    },
    {
        title: 'Agreement',
        description: (
            <span>
                By adding any of Team Hydra&apos;s bots to your server or using these bots or services in any way, including partner
                services that run on our infrastructure, you are consenting to the policies outlined in this document. In addition, you (the
                server manager or service user) are agreeing to inform your members of the{' '}
                <a href="https://discordapp.com/developers/docs/legal" className="underline text-green-600">
                    Discord Developer Terms of Service
                </a>{' '}
                and the contents of this document. If you, the server manager, do not agree to this document, you may remove the bot(s) from
                the server. If you, the server member, do not agree to this document, you may leave the server that contains the bot(s). If
                you, the service user, do not agree to this document, you may revoke authorization of the application(s) in your
                &apos;Authorized Apps&apos; menu. All data related to your user will be deleted at your request or within 3-6 months after
                not being seen by our services or bots, depending on said service or bot.
            </span>
        ),
    },
];
