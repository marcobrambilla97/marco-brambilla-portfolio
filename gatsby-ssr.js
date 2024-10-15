const React = require("react")

exports.onRenderBody = ({
    setHeadComponents,
    setPreBodyComponents,
    setBodyAttributes,
    setPostBodyComponents
}) => {
    setHeadComponents([
        <link as="script" rel="preload" href="/scripts/preloader.js" key="preload-script" />,
        <noscript key="noscript-style">
            <link rel="stylesheet" href="/styles/noscript.css" />
        </noscript>
    ]);

    setPreBodyComponents([
        <div id="preloader" key="preloader">
            <div className="preloader_text">
                <span id="preloader-counter">00</span>
            </div>
            <div className="preloader_copy">
                <span id="preloader-copy">Marco Brambilla Portfolio @{new Date().getFullYear()}</span>
            </div>
        </div>
    ]);

    setBodyAttributes({
        className: "preloader_active"
    });

    setPostBodyComponents([
        <script src="/scripts/preloader.js" key="postbody-script" />
    ]);
};
