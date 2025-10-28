(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "cro-t-jm-ki57";
        /* all Pure helper functions */

        function waitForElement(selector, trigger) {
            var interval = setInterval(function () {
                if (
                    document &&
                    document.querySelector(selector) &&
                    document.querySelectorAll(selector).length > 0
                ) {
                    clearInterval(interval);
                    trigger();
                }
            }, 50);
            setTimeout(function () {
                clearInterval(interval);
            }, 15000);
        }

        function insertHtml(selector, content, position) {
            var el = document.querySelector(selector);
            if (!position) {
                position = "afterend";
            }
            if (el && content) {
                el.insertAdjacentHTML(position, content);
            }
        }

        function addClass(el, cls) {
            var el = document.querySelector(el);
            if (el) {
                el.classList.add(cls);
            }
        }

        var croSureSection = `<div id="ki57-reassuring" class="cro-ki57-reassuring relative overflow-hidden">
        <div class="cro-ki57-reassuring-wrapper relative container">
            <div class="cro-ki57-reassuring-inner">
                <div class="cro-ki57-reassuring-header">
                    <h2>Not sure where to begin your debt-free journey?</h2>
                </div>
                <div class="cro-ki57-reassuring-text">
                    <p>No matter where you're starting from, we're here for you every step of the way. From loans to debt consolidation to credit counselling, let's find the right service for you.</p>
                </div>
            </div>
        </div>
    </div>`;

        function init() {
            addClass("body", variation_name);

            waitForElement("#call-to-action-and-form", function () {
                if (!document.querySelector(".cro-ki57-reassuring")) {
                    insertHtml("#call-to-action-and-form", croSureSection, "afterend");
                }
            });
        }

        waitForElement('#call-to-action-and-form', init);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();