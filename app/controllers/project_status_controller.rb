class ProjectStatusController < ApplicationController
  before_action :authenticate_user!
  before_action :set_project_status, only: [:show, :edit, :update, :destroy]


  # GET /project_status
  # GET /project_status.json
  def index
      @project_status = ProjectStatus.all
  end

  # GET /project_status/1
  # GET /project_status/1.json
  def show
  end

  # GET /project_status/new
  def new
    @project_status = ProjectStatus.new
  end

  # GET /project_status/1/edit
  def edit
  end

  # POST /project_status
  # POST /project_status.json
  def create
    @project_status = ProjectStatus.new(project_status_params)


    respond_to do |format|
      if @project_status.save
        format.html { redirect_to edit_project_status_path(@project_status), notice: 'ProjectStatus was successfully created.' }
        format.json { render :show, status: :created, location: @project_status }
      else
        format.html { render :new }
        format.json { render json: @project_status.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /project_status/1
  # PATCH/PUT /project_status/1.json
  def update
    respond_to do |format|
      if @project_status.update(project_status_params)
        format.html { redirect_to edit_project_status_path(@project_status), notice: 'ProjectStatus was successfully updated.' }
        format.json { render :show, status: :ok, location: @project_status }
      else
        format.html { render :edit }
        format.json { render json: @project_status.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /project_status/1
  # DELETE /project_status/1.json
  def destroy
    @project_status.destroy
    respond_to do |format|
      format.html { redirect_to project_status_url, notice: 'ProjectStatus was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project_status
      @project_status = ProjectStatus.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def project_status_params
      params[:projectStatus].permit(:status)
    end

end
