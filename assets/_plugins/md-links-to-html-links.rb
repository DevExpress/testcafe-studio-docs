module ConvertMdLinksToHtml
    class Generator < Jekyll::Generator
        LINK_TO_OTHER_DIR_INDEX_RE = /(\[[^\]]*\]\([^:\)]*\/)(README\.md)(#[^\)]*)?\)/
        LINK_TO_CURRENT_DIR_INDEX_RE = /(\[[^\]]*\]\([^:\)]*)((?<=\()README\.md)(#[^\)]*)?\)/
        NON_INDEX_LINK_RE = /(\[[^\]]*\]\([^:\)]*)(?<!\/README)(?<!\(README)\.md(#[^\)]*)?\)/

        def generate(site)
            site.pages.each { |p| convert_links(site, p) }
        end
        def convert_links(site, page)
            page.content = page.content.gsub(LINK_TO_OTHER_DIR_INDEX_RE, '\1\3)')
            page.content = page.content.gsub(LINK_TO_CURRENT_DIR_INDEX_RE, '\1.\3)')
            page.content = page.content.gsub(NON_INDEX_LINK_RE, '\1.html\2)')
        end
    end
end