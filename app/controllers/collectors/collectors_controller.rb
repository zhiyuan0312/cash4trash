  def show
  	@collector = Collector.find_by(params[:id])
  end

  def index
  	@collector = current_collector
  end