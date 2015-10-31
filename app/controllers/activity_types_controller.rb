class ActivityTypesController < ApplicationController
		  before_action :authenticate_user!
  before_action :set_activityType, only: [:show, :edit, :update, :destroy]


  # GET /activityTypes
  # GET /activityTypes.json
  def index
      @activityTypes = ActivityType.all
  end

  # GET /activityTypes/1
  # GET /activityTypes/1.json
  def show
  end

  # GET /activityTypes/new
  def new
    @activityType = ActivityType.new
  end

  # GET /activityTypes/1/edit
  def edit
  end

  # POST /activityTypes
  # POST /activityTypes.json
  def create
    @activityType = ActivityType.new(activityType_params)


    respond_to do |format|
      if @activityType.save
        format.html { redirect_to edit_activityType_path(@activityType), notice: 'ActivityType was successfully created.' }
        format.json { render :show, status: :created, location: @activityType }
      else
        format.html { render :new }
        format.json { render json: @activityType.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /activityTypes/1
  # PATCH/PUT /activityTypes/1.json
  def update
    respond_to do |format|
      if @activityType.update(activityType_params)
        format.html { redirect_to edit_activityType_path(@activityType), notice: 'ActivityType was successfully updated.' }
        format.json { render :show, status: :ok, location: @activityType }
      else
        format.html { render :edit }
        format.json { render json: @activityType.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /activityTypes/1
  # DELETE /activityTypes/1.json
  def destroy
    @activityType.destroy
    respond_to do |format|
      format.html { redirect_to activityTypes_url, notice: 'ActivityType was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_activityType
      @activityType = ActivityType.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def activityType_params
      params[:activityType].permit(:name, :description)
    end



end
