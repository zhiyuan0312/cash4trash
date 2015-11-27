module CollectorHelper
  def collector_resource_name
    :collector
  end

  def collector_resource
    @resource ||= Collector.new
  end

  def collector_devise_mapping
    @devise_mapping ||= Devise.mappings[:collector]
  end

  def collector_resource_class
    collector_resource.class
  end
end
