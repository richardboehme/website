# frozen_string_literal: true

class Application::Cell::Navbar < Trailblazer::Cell
  def show
    render :navbar
  end

  private

  def landing_page?
    model[:layout] == "home"
  end

  def doc_page?
    model[:layout] == "documentation"
  end

  def about_us_page?
    model[:page] == "about_us"
  end

  def blog_page?
    model[:page] == "blog"
  end

  def learn_page?
    model[:page] == "learn"
  end
end
