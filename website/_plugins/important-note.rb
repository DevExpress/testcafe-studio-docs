class Redcarpet::Render::HTML
    IMPORTANT_NOTE_SIGN = "Important! "
    IMPORTANT_NOTE_SIGN_RE = /\A((\s)*<[^>]*>(\s)*)*Important!\s/

    def block_quote(text)
        html = "<blockquote"
        
        if !text.empty? and (text =~ IMPORTANT_NOTE_SIGN_RE) != nil
            html << " class=\"important\""
            text.sub!(IMPORTANT_NOTE_SIGN, '')
        end
        
        return html << "><div class=\"blockquote-content\">#{text}</div></blockquote>"
    end
end