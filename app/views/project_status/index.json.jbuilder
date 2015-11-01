json.array!(@project_status) do |project_status|
  json.extract! project_status, :id, :status
end
