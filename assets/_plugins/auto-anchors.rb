require 'redcarpet'
require 'sanitize'
require 'htmlentities'

class Redcarpet::Render::HTML
    CHARS_FORBIDDEN_IN_ANCHOR_ID_RE = /[^A-Za-z0-9\-_\s]/
    WHITESPACE_RE = /\s+/

    def header(title, level)
        if level == 1
            return "<h#{level}>#{title}</h#{level}>"
        end

        anchor = Sanitize
            .clean(title)
            .downcase
        
        coder = HTMLEntities.new
        anchor = coder.decode(anchor)

        # Remove non-permitted symbols,
        # then replace whitespaces with hyphens.
        anchor.gsub!(CHARS_FORBIDDEN_IN_ANCHOR_ID_RE, "")
        anchor.strip!
        anchor.gsub!(WHITESPACE_RE, "-")

        anchor = coder.encode(anchor)

        return "<h#{level}><a class=\"anchor\" name=\"#{anchor}\"></a>#{title} <a class=\"permalink\" href=\"##{anchor}\">#</a></h#{level}>"
  end
end